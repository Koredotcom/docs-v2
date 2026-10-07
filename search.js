// Custom search for products excluded from Mintlify's built-in search.
// Place this file in the docs root (Mintlify loads every .js file there on all pages).
(function () {
  // To add a product later, add one more entry here.
  var PRODUCTS = [
    {
      prefix: '/ai-for-service/',
      index: 'https://raw.githubusercontent.com/Koredotcom/docs-v2/search-index/ai-for-service.json',
    },
  ];

  var cache = {};
  var btn, overlay, input, list, current;

  function productFor(path) {
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (path.indexOf(PRODUCTS[i].prefix) === 0) return PRODUCTS[i];
    }
    return null;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function addStyles() {
    var css =
      '#cs-btn{position:fixed;right:20px;bottom:20px;z-index:9998;padding:10px 16px;border-radius:999px;border:1px solid #d0d5dd;background:#fff;color:#111;font:500 14px system-ui,sans-serif;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.15)}' +
      '#cs-overlay{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.5);display:none;align-items:flex-start;justify-content:center;padding-top:10vh}' +
      '#cs-box{width:min(640px,92vw);max-height:75vh;overflow:auto;background:#fff;color:#111;border-radius:12px;padding:16px;font-family:system-ui,sans-serif}' +
      '#cs-input{width:100%;box-sizing:border-box;padding:12px;font-size:16px;border:1px solid #d0d5dd;border-radius:8px;background:#fff;color:#111}' +
      '.cs-item{display:block;padding:10px 8px;border-radius:8px;text-decoration:none;color:inherit;border-bottom:1px solid #eee}' +
      '.cs-item:hover{background:#f2f4f7}' +
      '.cs-t{font-weight:600;font-size:14px}.cs-h{color:#667085;font-size:13px}.cs-s{color:#475467;font-size:13px;margin-top:2px}' +
      '.cs-msg{padding:12px 8px;color:#667085;font-size:14px}' +
      'html.dark #cs-btn,html.dark #cs-box,html.dark #cs-input{background:#18181b;color:#f4f4f5;border-color:#3f3f46}' +
      'html.dark .cs-item{border-color:#27272a}html.dark .cs-item:hover{background:#27272a}' +
      'html.dark .cs-h,html.dark .cs-s,html.dark .cs-msg{color:#a1a1aa}';
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
  }

  function build() {
    addStyles();
    btn = document.createElement('button');
    btn.id = 'cs-btn';
    btn.textContent = 'Search this product';
    btn.onclick = open;
    overlay = document.createElement('div');
    overlay.id = 'cs-overlay';
    overlay.innerHTML =
      '<div id="cs-box"><input id="cs-input" type="search" placeholder="Search this product\'s docs..." autocomplete="off"><div id="cs-list"></div></div>';
    overlay.addEventListener('mousedown', function (e) {
      if (e.target === overlay) close();
    });
    document.body.appendChild(btn);
    document.body.appendChild(overlay);
    input = overlay.querySelector('#cs-input');
    list = overlay.querySelector('#cs-list');
    input.addEventListener('input', function () {
      run(input.value);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'k' && productFor(location.pathname)) {
        e.preventDefault();
        open();
      }
    });
    overlay.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('.cs-item')) close();
    });
  }

  function open() {
    overlay.style.display = 'flex';
    input.focus();
    load();
  }
  function close() {
    overlay.style.display = 'none';
  }

  function load() {
    var p = productFor(location.pathname);
    if (!p) return Promise.resolve([]);
    if (!cache[p.index]) {
      list.innerHTML = '<div class="cs-msg">Loading...</div>';
      cache[p.index] = fetch(p.index)
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          return r.json();
        })
        .then(function (d) {
          if (input.value) run(input.value);
          else list.innerHTML = '';
          return d;
        })
        .catch(function () {
          delete cache[p.index];
          list.innerHTML = '<div class="cs-msg">Search is unavailable right now.</div>';
          return [];
        });
    }
    return cache[p.index];
  }

  function score(rec, terms) {
    var t = rec.title.toLowerCase(), h = rec.heading.toLowerCase(), x = rec.text.toLowerCase();
    var total = 0;
    for (var i = 0; i < terms.length; i++) {
      var term = terms[i], s = 0;
      if (t.indexOf(term) > -1) s += 5;
      if (h.indexOf(term) > -1) s += 3;
      if (x.indexOf(term) > -1) s += 1;
      if (!s) return 0; // every word must match somewhere
      total += s;
    }
    return total;
  }

  function snippet(text, term) {
    var i = text.toLowerCase().indexOf(term);
    var start = Math.max(0, i - 50);
    return (start ? '...' : '') + text.slice(start, start + 150) + (text.length > start + 150 ? '...' : '');
  }

  function run(q) {
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      list.innerHTML = '';
      return;
    }
    var p = productFor(location.pathname);
    if (!p || !cache[p.index]) return;
    cache[p.index].then(function (data) {
      var hits = data
        .map(function (r) {
          return { r: r, s: score(r, terms) };
        })
        .filter(function (x) {
          return x.s > 0;
        })
        .sort(function (a, b) {
          return b.s - a.s;
        })
        .slice(0, 10);
      if (!hits.length) {
        list.innerHTML = '<div class="cs-msg">No results found.</div>';
        return;
      }
      list.innerHTML = hits
        .map(function (x) {
          var r = x.r;
          return (
            '<a class="cs-item" href="' + esc(r.url) + '"><div class="cs-t">' + esc(r.title) + '</div>' +
            (r.heading ? '<div class="cs-h">' + esc(r.heading) + '</div>' : '') +
            '<div class="cs-s">' + esc(snippet(r.text, terms[0])) + '</div></a>'
          );
        })
        .join('');
    });
  }

  // Mintlify navigates without full reloads, so re-check the URL regularly.
  function sync() {
    var on = !!productFor(location.pathname);
    if (on && !btn) build();
    if (btn) {
      btn.style.display = on ? 'block' : 'none';
      if (!on) close();
    }
  }

  function start() {
    sync();
    setInterval(sync, 500);
  }
  if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start);
})();
