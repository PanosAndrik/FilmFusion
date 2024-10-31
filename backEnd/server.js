const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const verifyToken = require("./middleware/auth");
const port = process.env.PORT || 10000;

const connection = require('./connection.js');

// CORS configuration
app.use(cors({
  origin: [
    'https://filmfusionapp.netlify.app',
    'http://localhost:3000' // Keep this for local development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Make sure this comes BEFORE your route definitions
app.use(express.json());

// Your existing routes
app.use("/movie", require("./routes/movieRouter.js"));
app.use("/user", require("./routes/userRouter.js"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});