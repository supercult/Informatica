const Express = require('express');
const Fs = require('fs');

var app = Express();

app.use(Express.static('public'));

app.listen(1337, function () {
  console.log('App is running on port 80');
});