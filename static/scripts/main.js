require.config({
    paths: {
        jquery: 'libs/jquery.min.js',
        backbone: 'libs/backbone.min.js',
        underscore: 'libs/underscore.min.js',
        marionette: 'libs/backbone.marionette.js',
        views: 'views/',
        models: 'models/'
    },

    shim: {
        jquery: {
            exports: 'jQuery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore']
            exports: 'Backbone'
        },
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        }
    }
});

define([
    'backbone', 
    'marionette', 
    'collections/event/event', 
    'views/event/creation'
], function(Backbone, Marionette, EventCollection, EventCreationView) {
    // List of downtime events
    var event_collection = new EventCollection();

    // Form to create new downtime events
    var event_creation_view = new EventCreationView({ collection: event_collection });
    $(document).find('body').append(event_creation_view.render().$el);
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
