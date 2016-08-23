var express = require('express');

var app = express();

app.get('/', function(reg,res){
  res.send('Hello World!');
});

app.listen(7000, function(){
  console.log('server on!');
})
