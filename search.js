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

  // Hide Mintlify's floating "Preview Widget" (file-changes icon, bottom right).
  var HIDE_PREVIEW_WIDGET = true;

  var RECENT_KEY = 'cs-recent-searches';
  var MAX_RECENT = 5;

  var cache = {};
  var wrap, input, list;

  function getRecent() {
    try {
      var r = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
      return Array.isArray(r) ? r.slice(0, MAX_RECENT) : [];
    } catch (e) {
      return [];
    }
  }

  function saveRecent(q) {
    q = (q || '').trim();
    if (q.length < 2) return;
    var r = getRecent().filter(function (x) {
      return x.toLowerCase() !== q.toLowerCase();
    });
    r.unshift(q);
    try {
      localStorage.setItem(RECENT_KEY, JSON.stringify(r.slice(0, MAX_RECENT)));
    } catch (e) {}
  }

  function clearRecent() {
    try {
      localStorage.removeItem(RECENT_KEY);
    } catch (e) {}
  }

  function showRecent() {
    var r = getRecent();
    if (!r.length) {
      list.innerHTML = '';
      showList(false);
      return;
    }
    var clock =
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
    list.innerHTML =
      '<div class="cs-rh"><span>Recent searches</span><button type="button" class="cs-clear">Clear</button></div>' +
      r
        .map(function (q) {
          return '<div class="cs-r" data-q="' + esc(q) + '">' + clock + '<span>' + esc(q) + '</span></div>';
        })
        .join('');
    showList(true);
  }

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
      '#cs-wrap{position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:9999;width:min(618px,67vw);font-family:system-ui,sans-serif}' +
      '#cs-input{width:100%;box-sizing:border-box;height:43px;padding:0 14px 0 38px;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23667085%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%278%27/%3E%3Cpath d=%27m21 21-4.3-4.3%27/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:12px center;background-size:16px;font-size:14px;border:1px solid #d0d5dd;border-radius:10px;background-color:#fff;color:#111;outline:none;box-shadow:0 1px 3px rgba(0,0,0,.08)}' +
      '#cs-input:focus{border-color:#7a5af8}' +
      '#cs-list{display:none;position:absolute;top:49px;left:0;right:0;max-height:70vh;overflow:auto;background:#fff;color:#111;border:1px solid #d0d5dd;border-radius:10px;padding:6px;box-shadow:0 8px 24px rgba(0,0,0,.18)}' +
      '.cs-item{display:block;padding:10px 8px;border-radius:8px;text-decoration:none;color:inherit;border-bottom:1px solid #eee}' +
      '.cs-item:hover{background:#f2f4f7}' +
      '.cs-t{font-weight:600;font-size:14px}.cs-h{color:#667085;font-size:13px}.cs-s{color:#475467;font-size:13px;margin-top:2px}' +
      '.cs-rh{display:flex;justify-content:space-between;align-items:center;padding:6px 8px;font-size:12px;font-weight:600;color:#667085;text-transform:uppercase;letter-spacing:.03em}' +
      '.cs-clear{border:0;background:none;color:#7a5af8;font-size:12px;cursor:pointer;text-transform:none;font-weight:500}' +
      '.cs-r{display:flex;align-items:center;gap:10px;padding:9px 8px;border-radius:8px;font-size:14px;cursor:pointer;color:inherit}' +
      '.cs-r:hover{background:#f2f4f7}' +
      '.cs-msg{padding:12px 8px;color:#667085;font-size:14px}' +
      '@media (max-width:1000px){#cs-wrap{width:min(488px,62vw)}}' +
      '@media (max-width:640px){#cs-wrap{left:auto;right:56px;transform:none;width:68vw}}' +
      'html.dark #cs-list{background:#18181b;color:#f4f4f5;border-color:#3f3f46}' +
      'html.dark #cs-input{background-color:#18181b;color:#f4f4f5;border-color:#3f3f46}html.dark .cs-item{border-color:#27272a}html.dark .cs-item:hover{background:#27272a}' +
      'html.dark .cs-r:hover{background:#27272a}html.dark .cs-rh{color:#a1a1aa}html.dark .cs-h,html.dark .cs-s,html.dark .cs-msg{color:#a1a1aa}';
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);
  }

  function showList(on) {
    list.style.display = on ? 'block' : 'none';
  }

  function build() {
    addStyles();
    wrap = document.createElement('div');
    wrap.id = 'cs-wrap';
    wrap.innerHTML =
      '<input id="cs-input" type="search" placeholder="Search..." autocomplete="off" aria-label="Search"><div id="cs-list"></div>';
    document.body.appendChild(wrap);
    input = wrap.querySelector('#cs-input');
    list = wrap.querySelector('#cs-list');

    input.addEventListener('focus', function () {
      load();
      if (input.value.trim()) showList(true);
      else showRecent();
    });
    input.addEventListener('input', function () {
      run(input.value);
    });
    document.addEventListener('mousedown', function (e) {
      if (wrap && !wrap.contains(e.target)) showList(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && wrap && wrap.contains(document.activeElement)) {
        showList(false);
        input.blur();
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'k' && productFor(location.pathname)) {
        e.preventDefault();
        input.focus();
        input.select();
      }
    });
    list.addEventListener('click', function (e) {
      var t = e.target;
      if (t.closest('.cs-clear')) {
        clearRecent();
        showRecent();
        return;
      }
      var rec = t.closest('.cs-r');
      if (rec) {
        input.value = rec.getAttribute('data-q');
        run(input.value);
        input.focus();
        return;
      }
      if (t.closest('.cs-item')) {
        saveRecent(input.value);
        showList(false);
      }
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') saveRecent(input.value);
    });
  }

  function load() {
    var p = productFor(location.pathname);
    if (!p) return Promise.resolve([]);
    if (!cache[p.index]) {
      cache[p.index] = fetch(p.index)
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          return r.json();
        })
        .catch(function () {
          delete cache[p.index];
          return null;
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
      showRecent();
      return;
    }
    showList(true);
    list.innerHTML = '<div class="cs-msg">Searching...</div>';
    Promise.resolve(load()).then(function (data) {
      if (input.value !== q) return; // a newer query is running
      if (!data) {
        list.innerHTML = '<div class="cs-msg">Search is unavailable right now.</div>';
        return;
      }
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
    if (on && !wrap) build();
    if (wrap) {
      wrap.style.display = on ? 'block' : 'none';
      if (!on) showList(false);
    }
  }

  function hidePreviewWidget() {
    if (!HIDE_PREVIEW_WIDGET) return;
    var st = document.createElement('style');
    st.textContent = 'button[aria-label="Preview Widget"]{display:none !important}';
    document.head.appendChild(st);
  }

  function start() {
    hidePreviewWidget();
    sync();
    setInterval(sync, 500);
  }
  if (document.body) start();
  else document.addEventListener('DOMContentLoaded', start);
})();
