define([
    'jquery',
    'app',
    'collections/event/event', 
    'views/event/event_collection'
], function($, Stratus, EventCollection, EventCollectionView) {
    var events = Stratus.module('Events');
    events.on('start', function(options) {
        // List of downtime events
        this.event_collection = new EventCollection();

        //  TODO: REGIONS!

        // View for event collection
        var event_collection_view = new EventCollectionView({
            collection: this.event_collection
        });
        $(document).find('div#event-list').append(event_collection_view.render().el);
    });
});
