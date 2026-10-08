// Custom search for products excluded from Mintlify's built-in search.
// Place this file in the docs root (Mintlify loads every .js file there on all pages).
(function () {
  // To add a product later, add one more entry here.
  var PRODUCTS = [
    {
      name: 'AI for Service',
      prefix: '/ai-for-service/',
      index: 'https://raw.githubusercontent.com/Koredotcom/docs-v2/search-index/ai-for-service.json',
    },
    {
      name: 'AI for Work',
      prefix: '/ai-for-work/',
      index: 'https://raw.githubusercontent.com/Koredotcom/docs-v2/search-index/ai-for-work.json',
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
      '#cs-wrap{position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:9999;width:min(680px,74vw);font-family:system-ui,sans-serif}' +
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
      '.cs-group{border-bottom:1px solid #eee}.cs-group .cs-item{border-bottom:0}' +
      '.cs-badge{display:inline-block;margin-left:6px;padding:1px 7px;border-radius:999px;background:#eef4ff;color:#3538cd;font-size:11px;font-weight:500;vertical-align:1px}' +
      '.cs-subs{display:flex;flex-wrap:wrap;gap:6px;padding:0 8px 10px}' +
      '.cs-sub{font-size:12px;padding:3px 8px;border-radius:999px;background:#f2f4f7;color:#475467;text-decoration:none}' +
      '.cs-sub:hover{background:#e4e7ec}' +
      'mark{background:none;color:#067647;font-weight:600;padding:0}' +
      '.cs-msg{padding:12px 8px;color:#667085;font-size:14px}' +
      '@media (max-width:1000px){#cs-wrap{width:min(537px,68vw)}}' +
      '@media (max-width:640px){#cs-wrap{left:auto;right:56px;transform:none;width:72vw}}' +
      'html.dark #cs-list{background:#18181b;color:#f4f4f5;border-color:#3f3f46}' +
      'html.dark #cs-input{background-color:#18181b;color:#f4f4f5;border-color:#3f3f46}html.dark .cs-item{border-color:#27272a}html.dark .cs-item:hover{background:#27272a}' +
      'html.dark .cs-r:hover{background:#27272a}html.dark .cs-rh{color:#a1a1aa}html.dark .cs-badge{background:#1e1b4b;color:#c7d2fe}html.dark .cs-group{border-color:#27272a}html.dark .cs-sub{background:#27272a;color:#d4d4d8}html.dark .cs-sub:hover{background:#3f3f46}html.dark mark{background:none;color:#4ade80}html.dark .cs-h,html.dark .cs-s,html.dark .cs-msg{color:#a1a1aa}';
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
      if (t.closest('.cs-item') || t.closest('.cs-sub')) {
        saveRecent(input.value);
        showList(false);
      }
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') saveRecent(input.value);
    });
  }

  // Loads every product's index and merges them into one list.
  // If one index is missing (e.g. not built yet), the others still work.
  function load() {
    if (!productFor(location.pathname)) return Promise.resolve(null);
    if (!cache.all) {
      cache.all = Promise.all(
        PRODUCTS.map(function (p) {
          return fetch(p.index)
            .then(function (r) {
              if (!r.ok) throw new Error(r.status);
              return r.json();
            })
            .then(function (d) {
              d.forEach(function (rec) {
                rec.product = p.name;
              });
              return d;
            })
            .catch(function () {
              return null;
            });
        })
      ).then(function (lists) {
        var ok = lists.filter(Boolean);
        if (!ok.length) {
          delete cache.all;
          return null;
        }
        return [].concat.apply([], ok);
      });
    }
    return cache.all;
  }

  function rx(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function count(text, re) {
    var m = text.match(re);
    return m ? m.length : 0;
  }

  // Score one section. Whole-word matches in the title/heading count the most.
  function score(rec, terms) {
    var t = rec.title.toLowerCase(), h = rec.heading.toLowerCase(), x = rec.text.toLowerCase();
    var total = 0;
    for (var i = 0; i < terms.length; i++) {
      var term = terms[i], word = new RegExp('(^|[^a-z0-9])' + rx(term) + '([^a-z0-9]|$)'), s = 0;
      if (word.test(t)) s += 8;
      else if (t.indexOf(term) > -1) s += 4;
      if (word.test(h)) s += 6;
      else if (h.indexOf(term) > -1) s += 3;
      var n = count(x, new RegExp(rx(term), 'g'));
      if (n) s += 1 + Math.min(n, 6) * 0.5;
      if (!s) return 0; // every word must match somewhere
      total += s;
    }
    return total;
  }

  function highlight(text, terms) {
    var re = new RegExp('(' + terms.map(rx).join('|') + ')', 'gi');
    return text
      .split(re)
      .map(function (part, i) {
        return i % 2 ? '<mark>' + esc(part) + '</mark>' : esc(part);
      })
      .join('');
  }

  function snippet(text, terms) {
    var lower = text.toLowerCase(), pos = -1;
    for (var i = 0; i < terms.length && pos < 0; i++) pos = lower.indexOf(terms[i]);
    var start = Math.max(0, pos - 50);
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
      // 1. score every section, 2. group sections by page, 3. rank pages
      var pages = {};
      data.forEach(function (r) {
        var s = score(r, terms);
        if (!s) return;
        var key = r.url.split('#')[0];
        (pages[key] = pages[key] || []).push({ r: r, s: s });
      });
      var groups = Object.keys(pages).map(function (key) {
        var secs = pages[key].sort(function (a, b) {
          return b.s - a.s;
        });
        var rank = secs[0].s + (secs[1] ? secs[1].s * 0.3 : 0) + (secs[2] ? secs[2].s * 0.15 : 0);
        var cur = productFor(location.pathname);
        if (cur && secs[0].r.product === cur.name) rank *= 1.2; // slight boost for the product being viewed
        return { secs: secs, rank: rank };
      });
      groups.sort(function (a, b) {
        return b.rank - a.rank;
      });
      groups = groups.slice(0, 8);
      if (!groups.length) {
        list.innerHTML = '<div class="cs-msg">No results found.</div>';
        return;
      }
      list.innerHTML = groups
        .map(function (g) {
          var best = g.secs[0].r;
          var subs = g.secs
            .slice(1)
            .filter(function (x) {
              return x.r.heading;
            })
            .slice(0, 3)
            .map(function (x) {
              return '<a class="cs-sub" href="' + esc(x.r.url) + '">' + highlight(x.r.heading, terms) + '</a>';
            })
            .join('');
          return (
            '<div class="cs-group"><a class="cs-item" href="' + esc(best.url) + '"><div class="cs-t">' + esc(best.title) + (best.product ? ' <span class=\"cs-badge\">' + esc(best.product) + '</span>' : '') + '</div>' +
            (best.heading ? '<div class="cs-h">' + highlight(best.heading, terms) + '</div>' : '') +
            '<div class="cs-s">' + highlight(snippet(best.text, terms), terms) + '</div></a>' +
            (subs ? '<div class="cs-subs">' + subs + '</div>' : '') +
            '</div>'
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
