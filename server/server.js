// requirements
var express = require('express');

// get express up
var app = express();

// hook up middleware (this controls routes etc)
require('./config/middleware.js')(app, express);

// listen to port
app.listen(3000);

// export app for testing
module.exports = app;