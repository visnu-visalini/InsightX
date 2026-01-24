const analyzeBtn = document.getElementById("analyzeBtn");
const output = document.getElementById("output");

analyzeBtn.addEventListener("click", () => {
  console.log("Popup: Analyze clicked");
  output.innerHTML = "<p>Fetching page data...</p>";

  chrome.runtime.sendMessage({ type: "FETCH_PAGE_TEXT" }, (response) => {
    console.log("Popup received:", response);

    if (response && response.text) {
      output.innerHTML = `<pre>${response.text}</pre>`;
    } else {
      output.innerHTML = "<p>No data received.</p>";
    }
  });
});
