var express = require('express')
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./config.js');
var mongoose = require('mongoose');

// app config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('public'));
mongoose.connect(config.database);

// api
var apiRoutes = require('./app/routes/api.js')(app, express);
app.use('/api', apiRoutes);

// catch-all route
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// start the server
app.listen(config.port, function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('http://localhost:%d/', config.port);
});
