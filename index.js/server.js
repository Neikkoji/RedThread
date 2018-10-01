const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('hello Bitches !!! :)' );
});

app.listen(8080);
