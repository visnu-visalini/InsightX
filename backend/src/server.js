require("dotenv").config();

console.log(
  "OPENAI KEY LOADED:",
  process.env.OPENAI_API_KEY ? "YES" : "NO"
);

const express = require("express");
const analyzeWithAI = require("./utils/ai");

const app = express(); // ✅ THIS WAS MISSING

app.use(express.json());

app.post("/analyze", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required"
      });
    }

    const result = await analyzeWithAI(text);

    res.json({
      success: true,
      result
    });
  } catch (error) {
    console.error("AI ERROR:", error.message);

    res.status(500).json({
      success: false,
      message: "AI processing failed"
    });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
