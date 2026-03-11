const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function analyzeWithAI(text) {
  const response = await openai.responses.create({
    model: "gpt-5-mini",
    input: `Analyze this webpage content and give key insights:\n\n${text}`,
  });

  return response.output[0].content[0].text;
}

module.exports = analyzeWithAI;
