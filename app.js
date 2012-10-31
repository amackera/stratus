var express = require('express');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    res.render('index', {
        str: 'hello world'
    });
});

app.listen(process.env.PORT || 5000);
