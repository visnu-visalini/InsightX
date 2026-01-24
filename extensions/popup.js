const btn = document.getElementById("analyzeBtn");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  output.textContent = "Analyzing...";

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.tabs.sendMessage(tab.id, { type: "GET_PAGE_TEXT" }, async (response) => {
    if (!response || !response.text) {
      output.textContent = "Failed to read page content";
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: response.text })
      });

      const data = await res.json();
      output.textContent = data.preview;
    } catch (err) {
      output.textContent = "Backend not reachable";
    }
  });
});
