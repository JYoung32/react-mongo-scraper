//Require in dependencies
const express = require('express');
const mongoose = require('mongoose');

//Set up express
const app = express();

//Boilerplate route to test server
app.get('/', (req, res) => {
  res.send("Hello World!");
});

//Connecting to MongoDB with mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react-mongo-scraper",
  {
    useMongoClient: true
  }
);

const PORT = process.env.PORT || 8000;
app.listen(PORT);