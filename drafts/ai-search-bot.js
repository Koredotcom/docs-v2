/*
(function () {
  if (location.pathname.indexOf("/ai-for-service/") === -1) return;
  if (window.__aiSearchBotStarted) {
    console.log("[ai-search-bot] already started, skipping");
    return;
  }
  window.__aiSearchBotStarted = true;
  console.log("[ai-search-bot] starting");

  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/kore-web-sdk@11.29.0/dist/umd/kore-web-sdk-umd-chat.min.js";
  s.onload = function () {
    KoreChatSDK.chatConfig.botOptions.API_KEY_CONFIG.KEY = "8102f3bb62b147e2b5e0567c3c735f27c355c30ab6a34b2dae67f4feab3e41e1stf1";
    new KoreChatSDK.chatWindow().show(KoreChatSDK.chatConfig);
  };
  document.head.appendChild(s);
})();
*/
