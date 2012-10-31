var express = require('express');

var app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('index', {
        str: 'hello world'
    });
});

app.listen(process.env.PORT || 5000);
