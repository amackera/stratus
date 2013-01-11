define(['backbone', 'models/event/event'], function(Backbone, Marionette, Event) {
    return Backbone.Collection.extend({
        model: Event
    });
});
