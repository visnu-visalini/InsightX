chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Background received:", request);

  if (request.type === "FETCH_PAGE_TEXT") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs || !tabs[0]) {
        sendResponse({ error: "No active tab" });
        return;
      }

      chrome.tabs.sendMessage(
        tabs[0].id,
        { type: "GET_PAGE_TEXT" },
        (response) => {
          console.log("Background got response:", response);
          sendResponse(response);
        }
      );
    });

    return true; // VERY IMPORTANT
  }
});
