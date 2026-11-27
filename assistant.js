(() => {
  if (location.pathname !== "/ai-for-service" && !location.pathname.startsWith("/ai-for-service/")) return;
  const script = document.currentScript || Array.from(document.scripts).find((item) => item.src.includes("assistant.js"));
  const scriptUrl = new URL(script?.src || location.href, location.href);
  const enabled = script?.dataset.enabled !== "false" && scriptUrl.searchParams.get("enabled") !== "false" && window.DOCS_AI_ENABLED !== false;
  if (!enabled) return;
  const hostname = location.hostname.toLowerCase();
  const defaultEndpoint = hostname === "localhost" || hostname === "127.0.0.1"
    ? "http://127.0.0.1:8787/ask"
    : (hostname === "docs.kore.ai"
      ? "https://docs-ai-assistant-production.pratik-gokhe.workers.dev/ask"
      : "https://docs-ai-assistant-staging.pratik-gokhe.workers.dev/ask");
  const endpoint = script?.dataset.endpoint
    || scriptUrl.searchParams.get("endpoint")
    || window.DOCS_AI_ENDPOINT
    || defaultEndpoint;
  if (!endpoint) {
    console.error("Docs assistant: set data-endpoint on the script tag.");
    return;
  }
  if (document.getElementById("docs-ai-assistant")) return;

  const style = document.createElement("style");
  style.textContent = `
    #docs-ai-assistant{--da-ink:#18212f;--da-muted:#687386;--da-line:#e3e8ef;--da-accent:#3759d7;--da-surface:#fff;--da-user:#edf1ff;--da-bot:#f4f6f8;--da-shadow:0 18px 60px #1f2b4530;font:14px/1.45 system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--da-ink);color-scheme:light}
    #docs-ai-assistant *{box-sizing:border-box} #da-launch{position:fixed;z-index:9998;right:24px;bottom:24px;border:0;border-radius:999px;background:var(--da-accent);color:#fff;padding:13px 18px;box-shadow:0 8px 28px #1f2b4550;font:600 14px inherit;cursor:pointer}
    #da-panel{position:fixed;z-index:9999;right:24px;bottom:84px;width:min(390px,calc(100vw - 32px));height:min(560px,calc(100dvh - 120px));border:1px solid var(--da-line);border-radius:16px;background:var(--da-surface);color:var(--da-ink);color-scheme:inherit;box-shadow:var(--da-shadow);display:none;overflow:hidden}
    #da-panel.da-open{display:flex;flex-direction:column} #da-head{display:flex;align-items:center;justify-content:space-between;padding:15px 17px;border-bottom:1px solid var(--da-line);font-weight:650}
    #da-head-actions{display:flex;align-items:center;gap:8px}#da-clear{border:1px solid var(--da-line);border-radius:8px;background:transparent;color:var(--da-muted);padding:6px 9px;font:inherit;font-size:12px;cursor:pointer}#da-close{border:0;background:transparent;font-size:22px;line-height:1;color:var(--da-muted);cursor:pointer} #da-messages{flex:1;overflow:auto;padding:16px;display:flex;flex-direction:column;gap:12px}
    .da-msg{max-width:92%;padding:11px 13px;border-radius:12px;white-space:pre-wrap;overflow-wrap:anywhere}.da-user{align-self:flex-end;background:var(--da-user)}.da-bot{align-self:flex-start;background:var(--da-bot)}
    .da-sources{margin-top:9px;display:flex;flex-direction:column;gap:5px;font-size:12px}.da-sources a{color:var(--da-accent);text-decoration:underline}.da-retry{display:inline-flex;align-items:center;gap:6px;margin-top:8px;border:1px solid var(--da-line);border-radius:8px;background:var(--da-surface);color:var(--da-ink);padding:6px 9px;font:inherit;cursor:pointer}.da-retry:hover{border-color:var(--da-accent)}
    #da-form{display:flex;gap:8px;padding:12px;border-top:1px solid var(--da-line)} #da-input{min-width:0;flex:1;border:1px solid var(--da-line);border-radius:10px;padding:10px 11px;background:var(--da-surface);color:var(--da-ink);font:inherit;outline-color:var(--da-accent)}#da-input::placeholder{color:var(--da-muted)} #da-send{border:0;border-radius:10px;padding:0 14px;background:var(--da-accent);color:white;font:600 14px inherit;cursor:pointer} #da-send:disabled{opacity:.65;cursor:wait}#da-send.da-stop{border:1px solid var(--da-line);background:var(--da-surface);color:var(--da-ink)}
    @media(max-width:520px){#da-panel{right:8px;bottom:76px;width:calc(100vw - 16px);height:min(620px,calc(100dvh - 100px))}#da-launch{right:16px;bottom:16px}}
  `;
  document.head.append(style);

  const root = document.createElement("div");
  root.id = "docs-ai-assistant";
  root.innerHTML = `<button id="da-launch" type="button" aria-expanded="false">Ask AI</button><section id="da-panel" aria-label="AI for Service docs" aria-live="polite"><header id="da-head"><span>AI for Service</span><div id="da-head-actions"><button id="da-clear" type="button">Clear</button><button id="da-close" type="button" aria-label="Close">×</button></div></header><div id="da-messages"><div class="da-msg da-bot">What would you like to know?</div></div><form id="da-form"><input id="da-input" maxlength="1200" placeholder="Type your question…" aria-label="Your question" required><button id="da-send" type="button">Send</button></form></section>`;
  document.body.append(root);

  const panel = root.querySelector("#da-panel");
  const launch = root.querySelector("#da-launch");
  const messages = root.querySelector("#da-messages");
  const input = root.querySelector("#da-input");
  const send = root.querySelector("#da-send");
  const contentRoot = document.querySelector("main") || document.body;
  const colorScheme = window.matchMedia?.("(prefers-color-scheme: dark)");

  function parseColor(value) {
    const match = String(value || "").match(/^rgba?\(([^)]+)\)$/i);
    if (!match) return null;
    const parts = match[1].replace(/\//g, ",").split(/[,\s]+/).filter(Boolean);
    if (parts.length < 3) return null;
    const channels = parts.slice(0, 3).map((part) => {
      const number = Number.parseFloat(part);
      return part.endsWith("%") ? number * 2.55 : number;
    });
    const alpha = parts[3] === undefined ? 1 : (parts[3].endsWith("%")
      ? Number.parseFloat(parts[3]) / 100
      : Number.parseFloat(parts[3]));
    return channels.every(Number.isFinite) && Number.isFinite(alpha) ? { channels, alpha } : null;
  }

  function getPageBackground() {
    for (let element = contentRoot; element; element = element.parentElement) {
      const color = parseColor(getComputedStyle(element).backgroundColor);
      if (color && color.alpha >= 0.95) return color;
    }
    return null;
  }

  function isDarkColor(channels) {
    const linear = channels.map((channel) => {
      const value = channel / 255;
      return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
    });
    return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722 < 0.38;
  }

  function syncTheme() {
    const background = getPageBackground();
    const dark = background ? isDarkColor(background.channels) : Boolean(colorScheme?.matches);
    const surface = background
      ? "rgb(" + background.channels.map((channel) => Math.round(channel)).join(", ") + ")"
      : (dark ? "#171a21" : "#fff");
    root.style.colorScheme = dark ? "dark" : "light";
    root.style.setProperty("--da-surface", surface);
    root.style.setProperty("--da-ink", dark ? "#f3f4f6" : (getComputedStyle(contentRoot).color || "#18212f"));
    root.style.setProperty("--da-muted", dark ? "#a8b1bf" : "#687386");
    root.style.setProperty("--da-line", dark ? "#3b424f" : "#e3e8ef");
    root.style.setProperty("--da-user", dark ? "#27334d" : "#edf1ff");
    root.style.setProperty("--da-bot", dark ? "#20242d" : "#f4f6f8");
    root.style.setProperty("--da-shadow", dark ? "0 18px 60px rgba(0,0,0,.55)" : "0 18px 60px #1f2b4530");
  }

  syncTheme();
  const themeObserver = new MutationObserver(syncTheme);
  for (let element = contentRoot; element; element = element.parentElement) {
    themeObserver.observe(element, { attributes: true, attributeFilter: ["class", "style", "data-theme"] });
  }
  colorScheme?.addEventListener?.("change", syncTheme);

  let activeRequest;
  launch.addEventListener("click", () => {
    const open = panel.classList.toggle("da-open");
    launch.setAttribute("aria-expanded", String(open));
    if (open) { syncTheme(); input.focus(); }
  });


  const clearButton = root.querySelector("#da-clear");
  const form = root.querySelector("#da-form");

  root.querySelector("#da-close").addEventListener("click", () => {
    cancelActiveRequest("Request canceled.");
    panel.classList.remove("da-open");
    launch.setAttribute("aria-expanded", "false");
    launch.focus();
  });

  clearButton.addEventListener("click", () => {
    cancelActiveRequest("Request canceled.");
    input.value = "";
    messages.replaceChildren();
    addMessage("da-bot", "What would you like to know?");
    messages.scrollTop = 0;
    input.focus();
  });

  send.addEventListener("click", () => {
    if (activeRequest) stopActiveRequest();
    else submitQuestion();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitQuestion();
  });

  function submitQuestion() {
    const question = input.value.trim();
    if (!question || activeRequest) return;
    addMessage("da-user", question);
    input.value = "";
    const pending = addMessage("da-bot", "Searching the documentation…");
    runRequest(question, pending);
  }

  function stopActiveRequest() {
    if (!activeRequest || activeRequest.stopped) return;
    activeRequest.stopped = true;
    send.disabled = true;
    send.textContent = "Stopping…";
    activeRequest.controller.abort();
  }

  async function runRequest(question, pending) {
    const request = {
      controller: new AbortController(),
      pending,
      question,
      stopped: false,
      timedOut: false,
    };
    activeRequest = request;
    send.disabled = false;
    send.textContent = "Stop";
    send.classList.add("da-stop");
    const requestTimeout = setTimeout(() => {
      if (activeRequest === request) {
        request.timedOut = true;
        send.disabled = true;
        send.textContent = "Stopping…";
        request.controller.abort();
      }
    }, 45000);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
        signal: request.controller.signal,
      });
      const data = await response.json();
      if (activeRequest !== request) return;
      if (!response.ok) throw new Error(data.error || "Request failed");
      if (data.status === "out_of_scope") {
        pending.textContent = data.answer || "I can help with questions covered by the AI for Service documentation, such as features, setup, and troubleshooting.";
        return;
      }
      const answer = String(data.answer || "No answer was returned.").trim();
      if (data.status === "no_answer" || /^I couldn't find that in the AI for Service documentation\.?$/i.test(answer)) {
        renderNoAnswer(pending, question);
        return;
      }
      renderBoldMarkdown(pending, answer);
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
      if (activeRequest !== request) return;
      pending.textContent = error.name === "AbortError"
        ? (request.stopped ? "Request stopped." : "This request took too long.")
        : (error.message || "Something went wrong. Please try again.");
      if (!input.value.trim()) input.value = question;
    } finally {
      clearTimeout(requestTimeout);
      if (activeRequest === request) {
        activeRequest = undefined;
        send.disabled = false;
        send.textContent = "Send";
        send.classList.remove("da-stop");
        scrollMessageToStart(pending);
        input.focus();
      }
    }
  }

  function renderNoAnswer(pending, question) {
    pending.textContent = "I couldn't find an answer in the docs this time.";
    const retry = document.createElement("button");
    retry.type = "button";
    retry.className = "da-retry";
    retry.setAttribute("aria-label", "Try the same question again");
    retry.textContent = "↻ Try again";
    retry.addEventListener("click", () => {
      if (activeRequest) return;
      pending.textContent = "Searching the documentation…";
      runRequest(question, pending);
    });
    pending.append(retry);
  }
  function cancelActiveRequest(message) {
    if (!activeRequest) return;
    const request = activeRequest;
    activeRequest = undefined;
    request.controller.abort();
    request.pending.textContent = message;
    if (!input.value.trim()) input.value = request.question;
    send.disabled = false;
    send.textContent = "Send";
    send.classList.remove("da-stop");
  }
  function scrollMessageToStart(node) {
    requestAnimationFrame(() => {
      if (!panel.classList.contains("da-open")) return;
      const containerTop = messages.getBoundingClientRect().top + messages.clientTop;
      messages.scrollTop += node.getBoundingClientRect().top - containerTop;
    });
  }

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
