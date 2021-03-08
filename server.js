/*
  This is my NodeJS server!
  Turns out a semester or two of undealt-with trauma makes it hard to forkus on study
*/

/*
  First: necessary components

  Express         - A NodeJS web server framework

*/

//Set port config variable
const PORT = process.env.PORT || 3000; //Default process port or 3000

//Require express
const express = require('express'); //Express framework

/*
Quick note: Require essentially reads/executes a JS file and returns the associated exports object
*/

//Create web app and set up config
var app = express();
app.use(express.static(__dirname + '/')); //Set current directory as root
app.set('view engine', 'ejs'); //Mostly cause I'm familiar with ejs

/*
  HTTP requests! Awesome!
*/

app.get('/', function(req, res){

  res.redirect('/home');

});

app.get('/home', function(req, res){

  res.render('pages/prof');

});

app.get('/webcam', function(req, res){

  res.render('pages/webcam');

});

app.listen(PORT);
console.log(PORT + ' is the magic port');
