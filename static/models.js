var ListItem = Backbone.Model.extend({
    defaults: {
        name: '',
        details: '',
        done: false,
    },

    initialize: function() {}
});

var ListCollection = Backbone.Collection.extend({
    model: ListItem
});

