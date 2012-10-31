var ListItem = Backbone.Model.extend({
    defaults: {
        content: '',
        done: false,
    },

    initialize: function() {}
});

var ListItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-item',
    template: '<p><%= content %></p>',
    
    initialize: function() {
        this.model.on('change', this.render, this); 
    },

    render: function() {
        var html = _.template(this.template, {
            content: this.model.get('content')
        });

        this.$el.html(html);

        return this;
    }
});

var ListCollection = Backbone.Collection.extend({
    model: ListItem
});
