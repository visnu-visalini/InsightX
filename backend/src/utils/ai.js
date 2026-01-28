const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function analyzeWithAI(text) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You extract keywords and give a short summary."
      },
      {
        role: "user",
        content: text
      }
    ]
  });

  return completion.choices[0].message.content;
}

module.exports = analyzeWithAI;
