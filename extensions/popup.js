const analyzeBtn = document.getElementById("analyzeBtn");
const output = document.getElementById("output");

analyzeBtn.addEventListener("click", () => {
  output.innerHTML = "<p>Fetching page data...</p>";

  chrome.runtime.sendMessage(
    { type: "FETCH_PAGE_TEXT" },
    (response) => {
      if (response && response.text) {
        output.innerHTML = `<pre>${response.text}</pre>`;
      } else {
        output.innerHTML = "<p>No data received.</p>";
      }
    }
  );
});
