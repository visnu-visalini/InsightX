console.log("InsightX content script loaded");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Content received:", request);

  if (request.type === "GET_PAGE_TEXT") {
    const text =
      window.getSelection().toString() || document.body.innerText;

    sendResponse({ text: text.slice(0, 300) });
  }
});
