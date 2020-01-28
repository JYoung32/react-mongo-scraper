//Require in dependencies
const express = require('express');
const mongoose = require("mongoose");
const logger = require('morgan');
const routes = require("./routes");

//Set up express
const app = express();

//Use morgan logger for logging request
app.use(logger('dev'));
//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react-mongo-scraper",
  {
    useMongoClient: true
  }
);

var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function () {
  console.log("Mongoose connection successful.");
});



const PORT = process.env.PORT || 8000;
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
