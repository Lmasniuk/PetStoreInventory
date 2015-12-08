var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

// app config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
mongoose.connect("mongodb://dbuser:dbpassword123@ds057204.mongolab.com:57204/petstore", function(err) {
  if (err) return console.error(err);
});
var port = process.env.PORT || 8000;

// api
var apiRoutes = require('./app/routes/api.js')(app, express);
app.use('/api', apiRoutes);

// catch-all route
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// start the server
app.listen(port, function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('http://localhost:%d/', port);
});
