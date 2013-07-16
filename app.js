var express = require('express')
    ejs = require('ejs'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google').Strategy,
    mongo = require('mongodb');

ejs.open = '{{';
ejs.close = '}}';

// This module exports our express server
var app = module.exports = express();

app.set('views', __dirname + '/views');
app.engine('ejs', ejs.__express);
app.use('/static', express.static(__dirname + '/static'));
app.use(express.bodyParser());
app.disable('view cache');

var server = new mongo.Server('localhost', process.env.DB_PORT || 27017, {auto_reconnect: true});
var users = new mongo.Db('users', server, {fsync: true});

passport.use(new GoogleStrategy({
        returnURL: 'http://localhost:5000/auth/google/return',
        realm: 'localhost'
    },
    function (identifier, profile, done) {
        users.findOrCreate({ openId: identifier }, function(err, user) {
            done(err, user);
        });
    })
);

// Redirect the user to Google for authentication.  When complete, Google
// will redirect the user back to the application at
//     /auth/google/return
app.get('/auth/google', passport.authenticate('google'));

// Google will redirect the user to this URL after authentication.  Finish
// the process by verifying the assertion.  If valid, the user will be
// logged in.  Otherwise, authentication has failed.
app.get('/auth/google/return', 
  passport.authenticate('google', { successRedirect: '/',
                                      failureRedirect: '/login' }));

// Include all the versions of the api
['v1'].forEach(function(ver) { require('./api/'+ver); });

// Index route
app.get('/', function(req, res) {
    res.render('index.ejs');
});
console.log('listening on port ', process.env.PORT || 5000);

// Listen for HTTP requests
app.listen(process.env.PORT || 5000);
