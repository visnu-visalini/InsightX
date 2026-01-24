const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  const { text } = req.body;

  console.log("Received text length:", text?.length);

  res.json({
  success: true,
    message: "Backend received page data",
    preview: text ? text.slice(0, 200) : ""
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
