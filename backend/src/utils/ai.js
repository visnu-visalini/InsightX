const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function analyzeWithAI(text) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a professional resume analyzer. Give clear feedback, strengths, weaknesses, and improvement suggestions.",
      },
      {
        role: "user",
        content: `Analyze this webpage content and give key insights:\n\n${text}`,
      },
    ],
  });

  return completion.choices[0].message.content;
}

module.exports = analyzeWithAI;
