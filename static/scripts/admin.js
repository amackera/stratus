require.config({
    paths: {
        jquery: 'lib/jquery.min',
        bootstrap: 'lib/bootstrap.min.js',
        backbone: 'lib/backbone.min',
        underscore: 'lib/underscore.min',
        marionette: 'lib/backbone.marionette.min',
        views: 'views/',
        models: 'models/',
        modules: 'modules/'
    },

    shim: {
        jquery: {
            exports: 'jQuery'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        underscore: {
            deps: ['jquery'],
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        }
    }
});

define([
    'jquery',
    'backbone', 
    'app',
    'modules/events',
    'modules/create'
], function($, Backbone, Stratus, Events, Create) {
    // start the app, this also starts the 'events' module
    Stratus.start();

    Stratus.Events.Create.start({
        event_collection: Stratus.Events.event_collection
    });
});
