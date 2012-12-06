var ListItem = Backbone.Model.extend({
    defaults: {
        content: '',
        done: false,
    },

    initialize: function() {}
});

var ListCollection = Backbone.Collection.extend({
    model: ListItem
});

