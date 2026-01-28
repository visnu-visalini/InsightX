const STOP_WORDS = [
  "the", "is", "and", "a", "to", "of", "in", "for", "on", "with",
  "this", "that", "it", "as", "are", "was", "be", "by", "or"
];

function extractKeywords(text) {
  if (!text) return [];

  const words = text
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(/\s+/)
    .filter(word => word.length > 3 && !STOP_WORDS.includes(word));

  const frequency = {};

  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word]) => word);
}

module.exports = extractKeywords;
