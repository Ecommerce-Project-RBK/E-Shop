const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
