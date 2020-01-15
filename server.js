//Require in dependencies
const express = require('express');
const mongoose = require('mongoose');

//Set up express
const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//Connecting to MongoDB with mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/react-mongo-scraper",
    {
        useMongoClient: true
    }
);

const PORT = process.env.PORT || 8000;
app.listen(PORT);