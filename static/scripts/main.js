require.config({
    paths: {
        jquery: 'lib/jquery.min',
        backbone: 'lib/backbone.min',
        underscore: 'lib/underscore.min',
        marionette: 'lib/backbone.marionette.min'
    },

    shim: {
        jquery: {
            exports: 'jQuery'
        },
        underscore: {
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

define(['backbone', 'marionette'], function(Backbone, Marionette) {
    var Stratus = new Marionette.Application();

    // Add regions to the app
    Stratus.addRegions({
        creation: '#event-creation'
    });

    Stratus.on('initialize:after', function() {
        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    return Stratus
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
