// requirements
var express = require('express');
var mongoose = require('mongoose');
 
 // connect to db
mongoose.connect('mongodb://localhost/daft_skunk');

// get express up
var app = express();

// hook up middleware (this controls routes etc)
require('./config/middleware.js')(app, express);

// listen to port
app.listen(8000);

// export app for testing
module.exports = app;