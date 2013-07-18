define(['backbone', 'models/event/event'], function(Backbone, Event) {
    return Backbone.Collection.extend({
        url: '/api/v1/events',
        model: Event,
        initialize: function () {
            this.fetch();
        }
    });
});
