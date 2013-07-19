var app = require('../app.js'),
    passport = require('passport'),
    mongo = require('mongodb');

app.get('/api/v1/events', function(req, resp) {
    app.db.collection('events', function(err, collection) {
        collection.find().toArray(function(err, items) {
            resp.send(items);
        });
    });
});

app.get('/api/v1/events/:id', function(req, resp) {
    var id = req.params.id;
    app.db.collection('events', function(err, collection) {
        collection.findOne({'_id': new mongo.BSONPure.ObjectID(id)}, function(err, item) {
            resp.send(item);
        });
    });
});

app.post('/api/v1/events', function(req, resp) {
    /* TODO: Add this back in! Also req.isAuthenticated()
     *
    // REALLY basic auth
    if (!req.user || !req.user.role || req.user.role != 'admin') {
        resp.status = 403;
        resp.send('Access Denied');
        return;
    }
    */

    var event = req.body;
    console.log('adding new event: ', event);
    app.db.collection('events', function(err, collection) {
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

app.get('/api/v1/users', function(req, resp) {
    // REALLY basic auth
    if (!req.user || !req.user.role) {
        resp.send('anon');
    } else {
        resp.send(req.user.role);
    }
});
