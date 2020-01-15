//Require in dependencies
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

//Set up express
const app = express();

//Use morgan logger for logging request
app.use(logger('dev'));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//Routes
// require('./routes/apiRoutes')(app)

//Connecting to MongoDB with mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/react-mongo-scraper"
);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`App is running on localhost:${PORT}`));