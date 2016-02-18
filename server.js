/**
 * OAuth
 */

var path = require('path');

var bodyParser = require('body-parser');
var express = require('express');
 
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Force HTTPS on Heroku
if (app.get('env') === 'production') {
  app.use(function(req, res, next) {
    var protocol = req.get('x-forwarded-proto');
    protocol == 'https' ? next() : res.redirect('https://' + req.hostname + req.url);
  });
}
app.use(express.static(path.join(__dirname, './build')));


node_xj = require("xls-to-json");
  node_xj({
    input: "pinpoint.xls",  // input xls
    output: "build/output.json", // output json
    sheet: "Sample HSR",  // specific sheetname
  }, function(err, result) {
    if(err) {
      //console.error(err);
    } else {
      //console.log(result);
    }
  });

 
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
