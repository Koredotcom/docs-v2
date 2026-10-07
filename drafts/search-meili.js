(function () {
  var HOST = "https://ms-410147be7d56-54799.sgp.meilisearch.io";
  var INDEX = "ai-for-service";
  var KEY = "Db1471e8af8537d15403cf38603b759bc77670f0445a069a45817de957cd2a80"; // search-only key, never the master key

  var style = document.createElement("style");
  style.textContent =
    "#search-input{width:100%;padding:10px 14px;font-size:16px;border:1px solid #9ca3af66;border-radius:8px;background:transparent;color:inherit;box-sizing:border-box}" +
    "#search-status{margin:10px 0;font-size:14px;opacity:.7}" +
    ".ms-result{display:block;padding:12px 0;border-bottom:1px solid #9ca3af33;text-decoration:none!important;color:inherit!important}" +
    ".ms-title{font-weight:600;font-size:16px}" +
    ".ms-snippet{font-size:14px;opacity:.8;margin-top:4px}" +
    ".ms-result mark{background:#fde04766;color:inherit;border-radius:2px}";
  document.head.appendChild(style);

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  // escape first, then turn our placeholder markers into <mark> tags
  function hl(s) {
    return esc(s).replace(/__hl__/g, "<mark>").replace(/__\/hl__/g, "</mark>");
  }

  function init() {
    var input = document.getElementById("search-input");
    var status = document.getElementById("search-status");
    var results = document.getElementById("search-results");
    if (!input || !results || input.dataset.searchReady) return;
    input.dataset.searchReady = "true";

    var timer = null;
    var counter = 0;

    function run(q) {
      var id = ++counter;
      if (!q.trim()) {
        status.textContent = "";
        results.innerHTML = "";
        return;
      }
      status.textContent = "Searching...";
      fetch(HOST + "/indexes/" + INDEX + "/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + KEY
        },
        body: JSON.stringify({
          q: q,
          limit: 10,
          attributesToCrop: ["content"],
          cropLength: 30,
          attributesToHighlight: ["title", "heading", "content"],
          highlightPreTag: "__hl__",
          highlightPostTag: "__/hl__"
        })
      })
        .then(function (r) {
          if (!r.ok) throw new Error("HTTP " + r.status);
          return r.json();
        })
        .then(function (data) {
          if (id !== counter) return; // ignore outdated responses
          var hits = data.hits || [];
          status.textContent = hits.length
            ? "Top " + hits.length + " of about " + data.estimatedTotalHits + " results"
            : "No results found";
          results.innerHTML = hits
            .map(function (h) {
              var f = h._formatted || h;
              var title = f.title || h.title;
              var heading = f.heading && h.heading !== h.title ? " › " + hl(f.heading) : "";
              return (
                '<a class="ms-result" href="' + esc(h.url) + '">' +
                '<div class="ms-title">' + hl(title) + heading + "</div>" +
                '<div class="ms-snippet">' + hl(f.content) + "</div>" +
                "</a>"
              );
            })
            .join("");
        })
        .catch(function (e) {
          if (id !== counter) return;
          status.textContent = "Search failed: " + e.message;
          results.innerHTML = "";
        });
    }

    input.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () { run(input.value); }, 250);
    });
  }

  init();
  // Mintlify navigates without full reloads, so re-check when the page changes
  new MutationObserver(init).observe(document.body, { childList: true, subtree: true });
})();