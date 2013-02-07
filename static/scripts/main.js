require.config({
    paths: {
        jquery: 'lib/jquery.min',
        bootstrap: 'lib/bootstrap.min.js',
        backbone: 'lib/backbone.min',
        underscore: 'lib/underscore.min',
        marionette: 'lib/backbone.marionette.min',
        views: 'views/',
        models: 'models/'
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
    'collections/event/event', 
    'views/event/creation',
    'views/event/event_collection'
], function($, Backbone, EventCollection, EventCreationView, EventCollectionView) {
    $(document).ready(function() {
        // List of downtime events
        window.event_collection = new EventCollection([
            {
                title: 'Cottontail load problems',
                date: 'January 28, 2013',
                description: 'Automated load warnings triggered alerts regarding load on our Cottontail server.'
            },
            {
                title: 'CDN leaf node stale cache',
                date: 'February 5, 2013',
                description: 'A problem with stale media in one of our CDN leaf nodes caused clients to not see updating application media.'
            }
        ]);

        // View for event collection
        var event_collection_view = new EventCollectionView({ collection: event_collection });
        $(document).find('div#container').append(event_collection_view.render().el);

        // Form to create new downtime events
        var event_creation_view = new EventCreationView({ collection: event_collection });
        $(document).find('div#container').append(event_creation_view.render().$el);
    });
});

/*
function initialize_app() {
    // Add a list of downtime events to the page
    var event_list = new ListCollection();
    var event_list_view = new ListView({ collection: event_list });
    $(document).find('body').append(event_list_view.render().$el);

    // Add a form to create new downtime events
    var creation_view = new ItemCreationView({ collection: event_list });
    $(document).find('body').append(creation_view.$el);
}
*/
