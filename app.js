var express = require('express'),
    ejs = require('ejs'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google').Strategy,
    MongoClient = require('mongodb').MongoClient,
    MongoServer = require('mongodb').Server,
    mongo = require('mongodb');

ejs.open = '{{';
ejs.close = '}}';

// This module exports our express server
var app = module.exports = express();

app.set('views', __dirname + '/views');
app.engine('ejs', ejs.__express);
app.use('/static', express.static(__dirname + '/static'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'pieces of eight!' }));
app.use(passport.initialize());
app.use(passport.session());
app.disable('view cache');

var mongo_client = new MongoClient(new MongoServer('localhost', 27017));
app.db = null;
mongo_client.open(function (err, client) {
    app.db = client.db('events'); 
});

passport.use(new GoogleStrategy({
        returnURL: 'http://localhost:5000/auth/google/return',
        realm: 'http://localhost:5000/'
    },
    function (identifier, profile, done) {
        app.db.collection('users', function (err, collection) {
            collection.findOne({ openId: identifier }, function(err, user) {
                // Create a new user if we don't have one already
                if (user === null) {
                    collection.insert({
                        openId: identifier,
                        role: 'anon',
                        profile: profile
                    }, function (err, inserted) {
                        // Record successfully inserted
                        console.log('user: ', user);
                        done(err, user);
                    });
                } else {
                    done(err, user);
                }
            });
        });
    })
);

passport.serializeUser(function(user, done) {
    done(null, user.openId);
});

passport.deserializeUser(function(id, done) {
    app.db.collection('users', function (err, collection) {
        if (err) { done(err, user); return; }

        collection.findOne({ openId: id }, function (err, user) {
            done(err, user);
        });
    });
});

// Redirect the user to Google for authentication.  When complete, Google
// will redirect the user back to the application at
//     /auth/google/return
app.get('/auth/google', passport.authenticate('google'));

// Google will redirect the user to this URL after authentication.  Finish
// the process by verifying the assertion.  If valid, the user will be
// logged in.  Otherwise, authentication has failed.
app.get('/auth/google/return', 
  passport.authenticate('google', { successRedirect: '/',
                                      failureRedirect: '/failed' }));

app.get('/failed', function (req, resp) {
    resp.send('LOGIN FAILED :(');
});

// Include all the versions of the api
['v1'].forEach(function(ver) { require('./api/'+ver); });

// Index route
app.get('/', function (req, resp) {
    resp.render('index.ejs');
});

app.get('/admin', ensureAuthenticated, function (req, resp) {
    resp.render('admin.ejs');
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/auth/google');
}

console.log('listening on port ', process.env.PORT || 5000);

// Listen for HTTP requests
app.listen(process.env.PORT || 5000);
