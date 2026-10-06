(function () {
  var WIDGET_PATH_PREFIX = '/ai-for-service';
  var SCRIPT_SRC = 'https://cdn.jsdelivr.net/npm/kore-web-sdk@11.29.0/dist/umd/kore-web-sdk-umd-chat.min.js';
  var PLUGIN_SRC = 'https://cdn.jsdelivr.net/npm/kore-web-sdk@11.29.0/dist/umd/plugins/answers-template.js';
  // NOTE: this key came with the plugin snippet and differs from the one in
  // the existing script. Confirm with the developer whether this is the
  // correct key going forward before this ships.
  var API_KEY = '8102f3bb62b147e2b5e0567c3c735f27c355c30ab6a34b2dae67f4feab3e41e1stf1';

  var chatInstance = null;

  function isWidgetRoute() {
    var path = window.location.pathname;
    // match "/ai-for-service" and "/ai-for-service/..." but not "/ai-for-service-foo"
    return path === WIDGET_PATH_PREFIX || path.indexOf(WIDGET_PATH_PREFIX + '/') === 0;
  }

  // Each script gets its own independent state/queue, so the SDK script and
  // the plugin script can each be loaded (and retried on failure) without
  // interfering with one another.
  function createScriptLoader(src) {
    var state = 'idle'; // idle | loading | loaded
    var pendingCallbacks = [];
    return function loadScript(callback) {
      if (state === 'loaded') return callback();
      pendingCallbacks.push(callback);
      if (state === 'loading') return;
      state = 'loading';
      var script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = function () {
        state = 'loaded';
        var cbs = pendingCallbacks;
        pendingCallbacks = [];
        cbs.forEach(function (cb) { cb(); });
      };
      script.onerror = function () {
        // allow a retry on the next route change instead of hanging forever
        state = 'idle';
        pendingCallbacks = [];
        script.remove();
        console.warn('[xo-search] failed to load script: ' + src);
      };
      document.head.appendChild(script);
    };
  }

  var loadSdkScript = createScriptLoader(SCRIPT_SRC);
  var loadAnswersPlugin = createScriptLoader(PLUGIN_SRC);

  function mountWidget() {
    if (chatInstance) return;
    loadSdkScript(function () {
      // route may have changed while the SDK script was loading
      if (chatInstance || !isWidgetRoute()) return;
      loadAnswersPlugin(function () {
        // route may have changed again while the plugin script was loading
        if (chatInstance || !isWidgetRoute()) return;
        KoreChatSDK.chatConfig.botOptions.API_KEY_CONFIG.KEY = API_KEY;
        chatInstance = new KoreChatSDK.chatWindow();
        chatInstance.installPlugin(new AnswersPluginSDK.AnswersTemplatesPlugin({}));
        chatInstance.show(KoreChatSDK.chatConfig);
      });
    });
  }

  function unmountWidget() {
    if (!chatInstance) return;
    if (typeof chatInstance.destroy === 'function') {
      chatInstance.destroy();
    }
    chatInstance = null;
  }

  var lastPath = null;
  function syncWidget() {
    var path = window.location.pathname;
    if (path === lastPath) return; // ignore hash/query-only changes
    lastPath = path;
    if (isWidgetRoute()) {
      mountWidget();
    } else {
      unmountWidget();
    }
  }

  syncWidget();

  // Mintlify is an SPA — re-check on every client-side route change.
  var originalPushState = history.pushState;
  var originalReplaceState = history.replaceState;

  history.pushState = function () {
    var result = originalPushState.apply(this, arguments);
    syncWidget();
    return result;
  };
  history.replaceState = function () {
    var result = originalReplaceState.apply(this, arguments);
    syncWidget();
    return result;
  };
  window.addEventListener('popstate', syncWidget);
})();