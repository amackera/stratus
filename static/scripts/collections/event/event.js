define(['backbone', 'models/event/event'], function(Backbone, Event) {
    return Backbone.Collection.extend({
        model: Event
    });
});
