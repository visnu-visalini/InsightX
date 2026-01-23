const analyzeBtn = document.getElementById("analyzeBtn");
const output = document.getElementById("output");

analyzeBtn.addEventListener("click", () => {
  output.innerHTML = "<p>Reading page content...</p>";

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { type: "GET_PAGE_TEXT" },
      (response) => {
        if (response && response.text) {
          output.innerHTML = `<pre>${response.text}</pre>`;
        } else {
          output.innerHTML = "<p>Could not read page content.</p>";
        }
      }
    );
  });
});
