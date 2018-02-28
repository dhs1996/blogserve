var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/');
app.use(express.static('public'));


app.get('/*',function(req,res,next){
	res.sendFile( __dirname + "/public/" + "index.html" );
})

app.listen(80);