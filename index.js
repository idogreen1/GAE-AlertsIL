const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('js/foundation'));
app.use(express.static('js/vendor'));
app.use(express.static('img'));


// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
//
//
//
app.get('/proxy.js', async function(req,res) {
console.log("* got proxy request");
  console.log(req.url);
  const tmpUrl = req.url.substring(10)
  console.log("the url: " + tmpUrl);
  const res1 = await fetch(tmpUrl);
  const tmpHtml = await res1.text();
  res.send(tmpHtml);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);