require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// File upload setup (memory storage)
const upload = multer();

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Test route
app.get("/", (req, res) => {
  res.send("InsightX Backend Running 🚀");
});

// ===============================
// 🔥 RESUME ANALYSIS ROUTE
// ===============================
app.post("/analyze", upload.single("resume"), async (req, res) => {
  try {
    // 1️⃣ Check file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // 2️⃣ Extract text from PDF
    const pdfData = await pdfParse(req.file.buffer);
    const resumeText = pdfData.text;

    if (!resumeText || resumeText.length < 20) {
      return res.status(400).json({
        success: false,
        message: "Could not extract resume text",
      });
    }

    // 3️⃣ Send to AI
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini", // cheap + fast
      messages: [
        {
          role: "system",
          content:
            "You are a professional resume analyzer. Give clear feedback, strengths, weaknesses, and improvement suggestions.",
        },
        {
          role: "user",
          content: resumeText,
        },
      ],
    });

    const aiResponse = completion.choices[0].message.content;

    // 4️⃣ Send result
    res.json({
      success: true,
      analysis: aiResponse,
    });

  } catch (error) {
    console.error("ERROR:", error.message);

    res.status(500).json({
      success: false,
      message: "Processing failed",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
