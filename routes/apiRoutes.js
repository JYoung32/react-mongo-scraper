//Require Dependencies
const express = require('express');
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

    //get route test
    app.get('/', function (req, res) {
        res.send('hello world')
    });

    //API scrape route
    app.get('/api/scrape', function (req, res) {
        //AXIOS get route to pull up NYTimes
        axios.get('https://www.nytimes.com/').then( function (response) {
            //Store into cheerio and save it to $
            const $ = cheerio.load(response.data);

            //grab every h2 tag within an article tag
            $("article").each(function (i, element) {
                //save results to an object
                var result = {};
                result.headline = $(element).find("h2").text().trim();

                console.log(result.headline);
            })
        });
    });
}