var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express) {
  // handle home page route
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../../client/index.html'));
  });

  // handle express middleware
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client/'));
};