// Custom search for products excluded from Mintlify's built-in search.
// Place this file in the docs root (Mintlify loads every .js file there on all pages).
(function () {
  // Kore-only prototype endpoint. Google Workspace blocks writes from visitors
  // who are not signed in to Kore. Keep this unset for a public rollout until
  // the approved public Worker endpoint is ready.
  var ANALYTICS_ENDPOINT = 'https://script.google.com/a/macros/kore.com/s/AKfycbxW1xCn49NCjKKVoo-2flF4u9dYfwWKKaKY8ytqEh7gBbGbnoC4XcsBhcayxJZAMv4s/exec';

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
  var analyticsTimer = null;
  var currentSearchId = null;
  var pendingAnalyticsSearch = null;
  var fuzzyTimer = null;

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
      var pre = PRODUCTS[i].prefix; // e.g. '/ai-for-service/'
      if (path === pre.slice(0, -1) || path.indexOf(pre) === 0) return PRODUCTS[i];
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
      '#cs-wrap{position:fixed;top:max(12px,env(safe-area-inset-top));left:50%;transform:translateX(calc(-50% - var(--cs-shift,0px)));z-index:9999;width:clamp(176px,calc((100vw - 760px) * 0.8),544px);font-family:system-ui,sans-serif}' +
      '#cs-input{-webkit-appearance:none;appearance:none;width:100%;box-sizing:border-box;height:43px;padding:0 14px 0 38px;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23667085%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%278%27/%3E%3Cpath d=%27m21 21-4.3-4.3%27/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:12px center;background-size:16px;font-size:14px;border:1px solid #d0d5dd;border-radius:10px;background-color:#fff;color:#111;outline:none;box-shadow:0 1px 3px rgba(0,0,0,.08)}' +
      '#cs-input::-webkit-search-decoration,#cs-input::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none}' +
      '#cs-input:focus{border-color:#7a5af8}' +
      '#cs-list{display:none;position:absolute;top:49px;left:50%;transform:translateX(-50%);width:max(100%,min(440px,94vw));max-height:70vh;overflow:auto;background:#fff;color:#111;border:1px solid #d0d5dd;border-radius:10px;padding:6px;box-shadow:0 8px 24px rgba(0,0,0,.18)}' +
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
      '@media (max-width:1023px){#cs-wrap{width:clamp(160px,calc((100vw - 520px) * 0.8),336px)}#cs-input{font-size:16px}}' +
      '@media (max-width:640px){#cs-wrap{left:auto;right:56px;transform:none;width:min(58vw,288px)}#cs-list{position:fixed;top:60px;left:3vw;right:3vw;transform:none;width:auto}}' +
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
        var link = t.closest('a.cs-item, a.cs-sub');
        if (link) {
          flushSearchAnalytics();
          recordSearchClick(link.href);
        }
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
        var all = [].concat.apply([], ok);
        cache.vocabulary = buildVocabulary(all);
        return all;
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

  function buildVocabulary(data) {
    var seen = Object.create(null);
    data.forEach(function (rec) {
      var words = (String(rec.title || '') + ' ' + String(rec.heading || '') + ' ' + String(rec.text || ''))
        .toLowerCase()
        .match(/[a-z0-9]+/g) || [];
      words.forEach(function (word) {
        if (word.length >= 3) seen[word] = true;
      });
    });
    return { words: Object.keys(seen), lookup: seen };
  }

  function editDistance(a, b, limit) {
    if (Math.abs(a.length - b.length) > limit) return limit + 1;
    var previous = [];
    for (var j = 0; j <= b.length; j++) previous[j] = j;
    var beforePrevious = null;
    for (var i = 1; i <= a.length; i++) {
      var current = [i], rowMin = i;
      for (var k = 1; k <= b.length; k++) {
        current[k] = Math.min(current[k - 1] + 1, previous[k] + 1, previous[k - 1] + (a[i - 1] === b[k - 1] ? 0 : 1));
        if (i > 1 && k > 1 && a[i - 1] === b[k - 2] && a[i - 2] === b[k - 1]) {
          current[k] = Math.min(current[k], beforePrevious[k - 2] + 1);
        }
        if (current[k] < rowMin) rowMin = current[k];
      }
      if (rowMin > limit) return limit + 1;
      beforePrevious = previous;
      previous = current;
    }
    return previous[b.length];
  }

  // Only correct a term when it is absent from the index and has one clear
  // nearest word. The caller uses this only after exact search returns nothing.
  function correctTerms(terms, vocabulary) {
    var changed = false, corrected = [];
    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      if (!/^[a-z0-9]+$/.test(term) || term.length < 3 || vocabulary.lookup[term]) {
        corrected.push(term);
        continue;
      }
      var limit = term.length < 7 ? 1 : 2;
      var best = '', bestDistance = limit + 1, ambiguous = false;
      for (var j = 0; j < vocabulary.words.length; j++) {
        var word = vocabulary.words[j];
        if (Math.abs(word.length - term.length) > limit) continue;
        var distance = editDistance(term, word, limit);
        if (distance < bestDistance) {
          best = word;
          bestDistance = distance;
          ambiguous = false;
        } else if (distance === bestDistance) {
          ambiguous = true;
        }
      }
      if (!best || ambiguous || bestDistance > limit) return null;
      corrected.push(best);
      changed = true;
    }
    return changed ? corrected : null;
  }

  function rankGroups(data, terms) {
    var pages = {};
    data.forEach(function (rec) {
      var points = score(rec, terms);
      if (!points) return;
      var key = rec.url.split('#')[0];
      (pages[key] = pages[key] || []).push({ r: rec, s: points });
    });
    var groups = Object.keys(pages).map(function (key) {
      var sections = pages[key].sort(function (a, b) {
        return b.s - a.s;
      });
      var rank = sections[0].s + (sections[1] ? sections[1].s * 0.3 : 0) + (sections[2] ? sections[2].s * 0.15 : 0);
      return { secs: sections, rank: rank };
    });
    groups.sort(function (a, b) {
      return b.rank - a.rank;
    });

    // Keep a fair share of slots for each product so one product cannot crowd out the others.
    var MAX_PAGES = 10;
    var cap = Math.ceil(MAX_PAGES / PRODUCTS.length), used = {}, picked = [], rest = [];
    groups.forEach(function (group) {
      var product = group.secs[0].r.product;
      used[product] = (used[product] || 0) + 1;
      if (used[product] <= cap && picked.length < MAX_PAGES) picked.push(group);
      else rest.push(group);
    });
    rest.forEach(function (group) {
      if (picked.length < MAX_PAGES) picked.push(group);
    });
    return picked.sort(function (a, b) {
      return b.rank - a.rank;
    });
  }

  function renderResults(query, groups, resultTerms, correctedTerms) {
    queueSearchAnalytics(
      query,
      groups.length,
      groups.map(function (group) {
        return group.secs[0].r.url.split('#')[0];
      })
    );
    list.innerHTML =
      (correctedTerms ? '<div class="cs-msg">No exact matches. Showing results for <strong>' + esc(correctedTerms.join(' ')) + '</strong>.</div>' : '') +
      groups
        .map(function (g) {
          var best = g.secs[0].r;
          var subs = g.secs
            .slice(1)
            .filter(function (x) {
              return x.r.heading;
            })
            .slice(0, 3)
            .map(function (x) {
              return '<a class="cs-sub" href="' + esc(x.r.url) + '">' + highlight(x.r.heading, resultTerms) + '</a>';
            })
            .join('');
          return (
            '<div class="cs-group"><a class="cs-item" href="' + esc(best.url) + '"><div class="cs-t">' + esc(best.title) + (best.product ? ' <span class="cs-badge">' + esc(best.product) + '</span>' : '') + '</div>' +
            (best.heading ? '<div class="cs-h">' + highlight(best.heading, resultTerms) + '</div>' : '') +
            '<div class="cs-s">' + highlight(snippet(best.text, resultTerms), resultTerms) + '</div></a>' +
            (subs ? '<div class="cs-subs">' + subs + '</div>' : '') +
            '</div>'
          );
        })
        .join('');
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

  // Redact common identifiers before analytics leaves the browser. Search itself
  // always uses the original query. The edge collector applies the same checks.
  function sanitizeAnalyticsQuery(value) {
    return String(value || '')
      .trim()
      .slice(0, 300)
      .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '[redacted email]')
      .replace(/\b(?:\+?\d[\d\s().-]{6,}\d)\b/g, '[redacted number]')
      .replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, '[redacted ip]')
      .replace(/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}(?:\.[A-Za-z0-9_-]{5,})?\b/g, '[redacted token]')
      .replace(/\b(?:api[_ -]?key|token|password|secret)\s*[:=]\s*[^\s,;]+/gi, '[redacted credential]')
      .slice(0, 200);
  }

  function newSearchId() {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') return window.crypto.randomUUID();
    return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
  }

  function sendAnalytics(event) {
    if (!ANALYTICS_ENDPOINT || !window.fetch) return;
    try {
      fetch(ANALYTICS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: JSON.stringify(event),
        keepalive: true,
      }).catch(function () {});
    } catch (e) {}
  }

  function flushSearchAnalytics() {
    if (analyticsTimer) clearTimeout(analyticsTimer);
    analyticsTimer = null;
    var pending = pendingAnalyticsSearch;
    pendingAnalyticsSearch = null;
    var product = productFor(location.pathname);
    if (!ANALYTICS_ENDPOINT || !pending || !input || input.value !== pending.rawQuery || !product || product.name !== 'AI for Service') return;
    currentSearchId = pending.search_id;
    sendAnalytics({
      type: 'search',
      search_id: pending.search_id,
      product: pending.product,
      query: pending.query,
      result_count: pending.result_count,
      top_results: pending.top_results,
    });
  }

  function queueSearchAnalytics(query, resultCount, resultPaths) {
    if (!ANALYTICS_ENDPOINT) return;
    if (analyticsTimer) clearTimeout(analyticsTimer);
    if (!input || input.value !== query) return;
    var safeQuery = sanitizeAnalyticsQuery(query);
    var product = productFor(location.pathname);
    if (safeQuery.length < 2 || !product || product.name !== 'AI for Service') return;
    pendingAnalyticsSearch = {
      rawQuery: query,
      search_id: newSearchId(),
      product: product.name,
      query: safeQuery,
      result_count: resultCount,
      top_results: (resultPaths || []).slice(0, 5),
    };
    analyticsTimer = setTimeout(flushSearchAnalytics, 700);
  }

  function recordSearchClick(href) {
    var product = productFor(location.pathname);
    if (!ANALYTICS_ENDPOINT || !currentSearchId || !product || product.name !== 'AI for Service') return;
    try {
      var url = new URL(href, location.href);
      if (url.origin !== location.origin) return;
      sendAnalytics({
        type: 'click',
        search_id: currentSearchId,
        product: product.name,
        clicked_path: url.pathname + url.hash,
      });
    } catch (e) {}
  }

  function run(q) {
    if (fuzzyTimer) clearTimeout(fuzzyTimer);
    fuzzyTimer = null;
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      if (analyticsTimer) clearTimeout(analyticsTimer);
      analyticsTimer = null;
      pendingAnalyticsSearch = null;
      currentSearchId = null;
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
      var groups = rankGroups(data, terms);
      if (!groups.length) {
        if (cache.vocabulary && terms.some(function (term) { return /^[a-z0-9]{3,}$/.test(term); })) {
          list.innerHTML = '<div class="cs-msg">No exact matches. Checking spelling...</div>';
          fuzzyTimer = setTimeout(function () {
            fuzzyTimer = null;
            if (input.value !== q) return;
            var suggestion = correctTerms(terms, cache.vocabulary);
            var correctedGroups = suggestion ? rankGroups(data, suggestion) : [];
            if (correctedGroups.length) {
              renderResults(q, correctedGroups, suggestion, suggestion);
            } else {
              list.innerHTML = '<div class="cs-msg">No results found.</div>';
              queueSearchAnalytics(q, 0, []);
            }
          }, 250);
          return;
        }
        list.innerHTML = '<div class="cs-msg">No results found.</div>';
        queueSearchAnalytics(q, 0, []);
        return;
      }
      renderResults(q, groups, terms, null);
    });
  }

  // Mintlify navigates without full reloads, so re-check the URL regularly.
  function sync() {
    var on = !!productFor(location.pathname);
    if (on && !wrap) build();
    if (wrap) {
      wrap.style.display = on ? 'block' : 'none';
      if (!on) {
        if (analyticsTimer) clearTimeout(analyticsTimer);
        analyticsTimer = null;
        pendingAnalyticsSearch = null;
        currentSearchId = null;
        if (fuzzyTimer) clearTimeout(fuzzyTimer);
        fuzzyTimer = null;
        showList(false);
      }
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
