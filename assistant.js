(() => {
  if (location.pathname !== "/ai-for-service" && !location.pathname.startsWith("/ai-for-service/")) return;
  const script = document.currentScript || Array.from(document.scripts).find((item) => item.src.includes("assistant.js"));
  const scriptUrl = new URL(script?.src || location.href, location.href);
  const enabled = script?.dataset.enabled !== "false" && scriptUrl.searchParams.get("enabled") !== "false" && window.DOCS_AI_ENABLED !== false;
  if (!enabled) return;
  const endpoint = script?.dataset.endpoint
    || new URL(script?.src || location.href).searchParams.get("endpoint")
    || (location.hostname === "localhost" || location.hostname === "127.0.0.1"
      ? "http://127.0.0.1:8787/ask"
      : (window.DOCS_AI_ENDPOINT || "https://docs-ai-assistant-staging.pratik-gokhe.workers.dev/ask"));
  if (!endpoint) {
    console.error("Docs assistant: set data-endpoint on the script tag.");
    return;
  }
  if (document.getElementById("docs-ai-assistant")) return;

  const style = document.createElement("style");
  style.textContent = `
    #docs-ai-assistant{--da-ink:#18212f;--da-muted:#687386;--da-line:#e3e8ef;--da-accent:#3759d7;font:14px/1.45 system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--da-ink)}
    #docs-ai-assistant *{box-sizing:border-box} #da-launch{position:fixed;z-index:9998;right:24px;bottom:24px;border:0;border-radius:999px;background:var(--da-accent);color:#fff;padding:13px 18px;box-shadow:0 8px 28px #1f2b4550;font:600 14px inherit;cursor:pointer}
    #da-panel{position:fixed;z-index:9999;right:24px;bottom:84px;width:min(390px,calc(100vw - 32px));height:min(560px,calc(100dvh - 120px));border:1px solid var(--da-line);border-radius:16px;background:#fff;box-shadow:0 18px 60px #1f2b4530;display:none;overflow:hidden}
    #da-panel.da-open{display:flex;flex-direction:column} #da-head{display:flex;align-items:center;justify-content:space-between;padding:15px 17px;border-bottom:1px solid var(--da-line);font-weight:650}
    #da-close{border:0;background:transparent;font-size:22px;line-height:1;color:var(--da-muted);cursor:pointer} #da-messages{flex:1;overflow:auto;padding:16px;display:flex;flex-direction:column;gap:12px}
    .da-msg{max-width:92%;padding:11px 13px;border-radius:12px;white-space:pre-wrap;overflow-wrap:anywhere}.da-user{align-self:flex-end;background:#edf1ff}.da-bot{align-self:flex-start;background:#f4f6f8}
    .da-sources{margin-top:9px;display:flex;flex-direction:column;gap:5px;font-size:12px}.da-sources a{color:var(--da-accent);text-decoration:underline}
    #da-form{display:flex;gap:8px;padding:12px;border-top:1px solid var(--da-line)} #da-input{min-width:0;flex:1;border:1px solid var(--da-line);border-radius:10px;padding:10px 11px;font:inherit;outline-color:var(--da-accent)} #da-send{border:0;border-radius:10px;padding:0 14px;background:var(--da-accent);color:white;font:600 14px inherit;cursor:pointer} #da-send:disabled{opacity:.55;cursor:wait}
    @media(max-width:520px){#da-panel{right:8px;bottom:76px;width:calc(100vw - 16px);height:min(620px,calc(100dvh - 100px))}#da-launch{right:16px;bottom:16px}}
  `;
  document.head.append(style);

  const root = document.createElement("div");
  root.id = "docs-ai-assistant";
  root.innerHTML = `<button id="da-launch" type="button" aria-expanded="false">Ask AI</button><section id="da-panel" aria-label="Documentation assistant" aria-live="polite"><header id="da-head"><span>Documentation assistant</span><button id="da-close" type="button" aria-label="Close">×</button></header><div id="da-messages"><div class="da-msg da-bot">Ask a question about the documentation. I’ll look for an answer in the docs.</div></div><form id="da-form"><input id="da-input" maxlength="1200" placeholder="Ask about the docs…" aria-label="Your question" required><button id="da-send" type="submit">Send</button></form></section>`;
  document.body.append(root);

  const panel = root.querySelector("#da-panel");
  const launch = root.querySelector("#da-launch");
  const messages = root.querySelector("#da-messages");
  const input = root.querySelector("#da-input");
  const send = root.querySelector("#da-send");
  let activeRequest;
  launch.addEventListener("click", () => {
    const open = panel.classList.toggle("da-open");
    launch.setAttribute("aria-expanded", String(open));
    if (open) input.focus();
  });
  root.querySelector("#da-close").addEventListener("click", () => {
    if (activeRequest) {
      activeRequest.abort();
      activeRequest = undefined;
    }
    panel.classList.remove("da-open");
    launch.setAttribute("aria-expanded", "false");
    launch.focus();
  });

  root.querySelector("#da-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    addMessage("da-user", question);
    input.value = "";
    send.disabled = true;
    const pending = addMessage("da-bot", "Searching the documentation…");
    activeRequest = new AbortController();
    const requestTimeout = setTimeout(() => activeRequest?.abort(), 45000);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
        signal: activeRequest.signal,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Request failed");
      renderBoldMarkdown(pending, data.answer || "No answer was returned.");
      if (Array.isArray(data.sources) && data.sources.length) {
        const list = document.createElement("div");
        list.className = "da-sources";
        const label = document.createElement("span");
        label.textContent = "Sources";
        list.append(label);
        for (const source of data.sources.slice(0, 4)) {
          const link = document.createElement("a");
          link.href = new URL(source.url, location.origin).href;
          link.textContent = source.title || "Documentation page";
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          list.append(link);
        }
        pending.append(list);
      }
    } catch (error) {
      pending.textContent = error.name === "AbortError"
        ? (panel.classList.contains("da-open") ? "This request took too long. Please try again." : "Request canceled.")
        : (error.message || "Something went wrong. Please try again.");
    } finally {
      clearTimeout(requestTimeout);
      activeRequest = undefined;
      send.disabled = false;
      messages.scrollTop = messages.scrollHeight;
      input.focus();
    }
  });

  function addMessage(kind, text) {
    const node = document.createElement("div");
    node.className = `da-msg ${kind}`;
    node.textContent = text;
    messages.append(node);
    messages.scrollTop = messages.scrollHeight;
    return node;
  }

  function renderBoldMarkdown(node, value) {
    node.replaceChildren();
    const parts = String(value).split(/(\*\*[^*\n]+?\*\*)/g);
    for (const part of parts) {
      if (part.startsWith("**") && part.endsWith("**")) {
        const strong = document.createElement("strong");
        strong.textContent = part.slice(2, -2);
        node.append(strong);
      } else {
        node.append(document.createTextNode(part));
      }
    }
  }
})();
