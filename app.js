var express = require('express');
var ejs = require('ejs');
ejs.open = '{{';
ejs.close = '}}';

var app = module.exports = express();

app.set('views', __dirname + '/views');
app.engine('ejs', ejs.__express);
app.use('/static', express.static(__dirname + '/static'));
app.use(express.bodyParser());
app.disable('view cache');


// Include all the versions of the api
['v1'].forEach(function(ver) { require('./api/'+ver); });

// Index route
app.get('/', function(req, res) {
    res.render('index.ejs');
});

console.log('listening on port ', process.env.PORT || 5000);

// Listen for HTTP requests
app.listen(process.env.PORT || 5000);
