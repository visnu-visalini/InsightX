const analyzeBtn = document.getElementById("analyzeBtn");
const output = document.getElementById("output");

function setLoading() {
  output.innerHTML = "<p>Loading...</p>";
}

function setResult(text) {
  output.innerHTML = `<p>${text}</p>`;
}

analyzeBtn.addEventListener("click", () => {
  console.log("Analyze button clicked");

  setLoading();

  setTimeout(() => {
    setResult("Popup JavaScript is working correctly ✅");
  }, 1000);
});
