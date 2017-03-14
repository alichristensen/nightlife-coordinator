var express = require('express'),
    app     = express(),
    request = require('request');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  var yelp_url = "";
  request(yelp_url, function(err, response, body){
    if (!err && response.statusCode == 200) {
      res.send(body);
    }
  });
});

app.listen(5000, function(){
  console.log('listening at port 5000');
});
