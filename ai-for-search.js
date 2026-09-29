(function () {
  var WIDGET_PATH_PREFIX = '/ai-for-service';
  var SCRIPT_SRC = 'https://agents-staging.kore.ai/api/sdk/embed/script';

  var WIDGET_ATTRS = {
    'project-id': '019d8b14-fcd8-7959-9208-e72771bc756c',
    'api-key': 'pk_c79197cb88cc369d7d53292eede8a975db0f4648b2d0f533',
    'endpoint': 'https://agents-staging.kore.ai',
    'channel-id': '01a0ecb0-4bb0-7e88-9a54-bc627e60724b',
    'client-session-identifier': 'true',
    'chat-enabled': 'true',
    'voice-enabled': 'false',
    'mode': 'chat',
    'position': 'bottom-right'
  };

  var scriptLoaded = false;
  var widgetEl = null;

  function loadScriptOnce() {
    if (scriptLoaded) return;
    var script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.defer = true;
    document.head.appendChild(script);
    scriptLoaded = true;
  }

  function mountWidget() {
    if (widgetEl) return; // already mounted
    loadScriptOnce();
    widgetEl = document.createElement('agent-widget');
    Object.keys(WIDGET_ATTRS).forEach(function (key) {
      widgetEl.setAttribute(key, WIDGET_ATTRS[key]);
    });
    document.body.appendChild(widgetEl);
  }

  function unmountWidget() {
    if (widgetEl) {
      widgetEl.remove();
      widgetEl = null;
    }
  }

  function syncWidget() {
    if (window.location.pathname.startsWith(WIDGET_PATH_PREFIX)) {
      mountWidget();
    } else {
      unmountWidget();
    }
  }

  // Initial check on hard page load
  syncWidget();

  // Mintlify is an SPA, so a load-time check alone won't catch in-app
  // navigation between /ai-for-service and other tabs. Patch history
  // methods + listen for popstate to re-check on every route change.
  var originalPushState = history.pushState;
  var originalReplaceState = history.replaceState;

  history.pushState = function () {
    originalPushState.apply(this, arguments);
    syncWidget();
  };
  history.replaceState = function () {
    originalReplaceState.apply(this, arguments);
    syncWidget();
  };
  window.addEventListener('popstate', syncWidget);
})();
