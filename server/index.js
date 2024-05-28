const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
require("./database/index.js")
app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
