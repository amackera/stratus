define(['backbone', 'models/event/event'], function(Backbone, Event) {
    return Backbone.Collection.extend({
        url: '/api/v1/events',
        model: Event,
        initialize: function () {
            this.fetch();
        },
        parse: function (response, options) {
            return _.map(response, function (model) {
                var new_model = _.clone(model);
                new_model.date = new Date(new_model.date);
                return new_model;
            });
        }
    });
});
