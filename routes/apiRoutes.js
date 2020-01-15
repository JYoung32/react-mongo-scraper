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

module.exports = function (app) {

    //home page
    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
        const path = require('path');
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }

    //Articles from database
    app.get('/api', function (req, res) {
        db.Article.find({ saved: false }, function (err, data) {
            res.send(data);
        });
    });

    //API scrape route
    app.get('/api/scrape', function (req, res) {
        //AXIOS get route to pull up NYTimes
        axios.get('https://www.nytimes.com/').then(function (response) {
            //Store into cheerio and save it to $
            const $ = cheerio.load(response.data);

            //grab every h2 tag within an article tag
            $("article").each(function (i, element) {
                //save results to an object
                var result = {};
                result.headline = $(element).find("h2").text().trim();
                result.url = `https://www.nytimes.com${$(element).find("a").attr("href")}`;
                result.summary = $(element).find("p").text().trim();

                if (result.headline !== '' && result.summary !== '') {
                    db.Article.findOne({ headline: result.headline }, function (err, data) {
                        if (err) {
                            console.log(err)
                        } else {
                            if (data === null) {
                                db.Article.create(result)
                                    .then(function (dbArticle) {
                                        console.log(dbArticle)
                                    })
                                    .catch(function (err) {
                                        // If an error occurred, send it to the client
                                        console.log(err)
                                    });
                            }
                            console.log(data)
                        }
                    })
                };
            });

            //if successful and save article, respond
            res.send("Scrape successful.");
        });
    });

    // save article to database by changed saved field to true
    app.put("/api/headlines/:id", function (req, res) {
        var saved = req.body.saved == 'true'
        if (saved) {
            db.Article.updateOne({ _id: req.body._id }, { $set: { saved: true } }, function (err, result) {
                if (err) {
                    console.log(err)
                } else {
                    return res.send("Article Saved to DB.")
                }
            });
        }
    });

    // delete article from database
    app.delete("/api/headlines/:id", function (req, res) {
        console.log(`reqbody: ${JSON.stringify(req.params.id)}`);
        db.Article.deleteOne({ _id: req.params.id }, function (err, result) {
            if (err) {
                console.log(err)
            } else {
                return res.send("Article Deleted")
            }
        });
    });

    // clear all articles from database
    app.get("/api/clear", function (req, res) {

        console.log(req.body);
        db.Article.deleteMany({}, function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log(result)
                res.send("Database Cleared");
            }
        });
    });





}