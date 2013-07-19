define([
       'jquery',
       'app',
       'views/event/creation'
], function ($, Stratus, EventCreationView) {
    var create = Stratus.module('Events.Create', { startWithParent: false });
    create.on('start', function (options) {
        // Form to create new downtime events
        var event_creation_view = new EventCreationView({
            collection: options.event_collection
        });

        $(document).find('ul.event-list').before(event_creation_view.render().$el);
    });
});
