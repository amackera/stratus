define([
    'jquery',
    'app',
    'collections/event/event', 
    'views/event/creation',
    'views/event/event_collection'
], function($, Stratus, EventCollection, EventCreationView, EventCollectionView) {
    var events = Stratus.module('Events');
    events.on('start', function(options) {
        // List of downtime events
        window.event_collection = new EventCollection();

        //  TODO: REGIONS!

        // View for event collection
        var event_collection_view = new EventCollectionView({ collection: event_collection });
        $(document).find('div#event-list').append(event_collection_view.render().el);

        // Form to create new downtime events
        var event_creation_view = new EventCreationView({ collection: event_collection });
        $(document).find('div#event-list').append(event_creation_view.render().$el);
    });
});
