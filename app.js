var express = require("express");
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var envoirment = app.get('env');
var port = process.env.PORT || 3000;

if('test' !== envoirment) {
  app.use(require('morgan')('dev'));
}

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static("public"));

app.listen(port,function(){
  console.log("Express is on port " + port);
});

module.exports = app;