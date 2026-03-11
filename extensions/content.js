chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getPageText") {
    const pageText = document.body.innerText;
    sendResponse({ text: pageText });
  }
});
