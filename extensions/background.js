chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "FETCH_PAGE_TEXT") {
    chrome.tabs.sendMessage(
      sender.tab.id,
      { type: "GET_PAGE_TEXT" },
      (response) => {
        sendResponse(response);
      }
    );
    return true; // keeps message channel open
  }
});
