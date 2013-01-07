var express = require('express');
var ejs = require('ejs');
ejs.open = '{{';
ejs.close = '}}';

var app = express();

app.set('views', __dirname + '/views');
app.engine('ejs', ejs.__express);
app.use('/static', express.static(__dirname + '/static'));
app.disable('view cache');

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.listen(process.env.PORT || 5000);
