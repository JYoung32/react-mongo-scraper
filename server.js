//Require in dependencies
const express = require('express');
const logger = require('morgan');

//Set up express
const app = express();

//Use morgan logger for logging request
app.use(logger('dev'));
//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require('./routes')(app)

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`App is running on localhost:${PORT}`));