chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["*://fonts.googleapis.com/*"]
    },
    ["blocking"]
);
