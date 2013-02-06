var app = require('../app.js');
var mongo = require('mongodb');

var server = new mongo.Server('localhost', process.env.DB_PORT || 27017, {auto_reconnect: true});
var db = new mongo.Db('events', server);

/*
app.get('/api/v1/events', function(req, resp) {
});
*/

app.post('/api/v1/events', function(req, resp) {
    var event = req.body;
    console.log('adding new event: ', event);
    db.collection('events', function(err, collection) {
        collection.insert(wine, {safe: true}, function(err, result) {
            if (err) {
                resp.send({'error': 'Unable to insert!'});
            } else {
                console.log('success adding event');
                response.send(result[0]);
            }
        });
    });
});
