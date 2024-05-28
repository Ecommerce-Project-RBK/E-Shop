const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/UsersRoutes");
const productRoutes=require('./routes/productRoutes')

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use('/api/products',productRoutes)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
