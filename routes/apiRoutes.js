//Require Dependencies
const axios = require('axios');
const cheerio = require("cheerio");
const mongoose = require("mongoose");

//Require all Models
const db = require('../models');

//Connecting to MongoDB with mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/react-mongo-scraper", 
    { useNewUrlParser: true }
);

module.exports = function(app) {

    //home page
    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
        const path = require('path');
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }

    //API get route to scrape article

}