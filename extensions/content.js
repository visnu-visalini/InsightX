chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "GET_PAGE_TEXT") {
    const text =
      window.getSelection().toString() || document.body.innerText;
    sendResponse({ text: text.slice(0, 300) });
  }
});
