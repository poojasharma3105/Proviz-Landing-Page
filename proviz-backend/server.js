const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require("morgan");
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));


mongoose.connect(process.env.DB_URI)
  .then(() => console.log(`MongoDB connected `))
  .catch((err) => {
    console.log("Database connection error:", err);
    process.exit(1);
  });

  

// Routes
app.use('/user', require("./routes/applications.js"));

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
