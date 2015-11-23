var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 9001));
app.use(express.static('www-data'));

app.listen(app.get('port'), function() {
  console.log('App is running on port: ' + app.get('port'));
});
