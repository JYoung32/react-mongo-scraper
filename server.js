//Require in dependencies
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

//Set up express
const app = express();

//Use morgan logger for logging request
app.use(logger('dev'));

//Routes
require('./routes/apiRoutes')(app)

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`App is running on localhost:${PORT}`));