const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use("/uploads", express.static("src/uploads"));

// Routes
const internRoutes = require("./routes/internRoutes");
app.use("/interns", internRoutes);

app.get("/", (req, res) => {
  res.send("Hello, FlexInterns!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
