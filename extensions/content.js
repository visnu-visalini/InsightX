console.log("InsightX content script loaded");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "GET_PAGE_TEXT") {
    const pageText = document.body.innerText;
    sendResponse({
      text: pageText.slice(0, 500)
    });
  }
});
