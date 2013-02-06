var app = require('../app.js');
var mongo = require('mongodb');

var server = new mongo.Server('localhost', process.env.DB_PORT || 27017, {auto_reconnect: true});
var db = new mongo.Db('events', server, {fsync: true});

app.get('/api/v1/events', function(req, resp) {
    db.collection('events', function(err, collection) {
        collection.find().toArray(function(err, items) {
            resp.send(items);
        });
    });
});

app.get('/api/v1/events/:id', function(req, resp) {
    var id = req.params.id;
    db.collection('events', function(err, collection) {
        collection.findOne({'_id': new mongo.BSONPure.ObjectID(id)}, function(err, item) {
            resp.send(item);
        })
    });
});

app.post('/api/v1/events', function(req, resp) {
    var event = req.body;
    console.log('adding new event: ', event);
    db.collection('events', function(err, collection) {
        collection.insert(event, {safe: true}, function(err, result) {
            if (err) {
                resp.send({'error': 'Unable to insert!'});
            } else {
                console.log('success adding event');
                resp.send(result[0]);
            }
        });
    });
});
