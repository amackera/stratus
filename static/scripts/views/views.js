var ListItemView = Backbone.View.extend({
    template: '#list-item',
    
    initialize: function() {
        this.model.on('change', this.render, this); 
    },

    render: function() {
        var rendered_template = _.template($(this.template).html())({
            name: this.model.get('name'),
            details: this.model.get('details')
        });

        this.$el.html(rendered_template);

        return this;
    }
});

var ListView = Backbone.View.extend({
    tagName: 'ul',
    className: 'list-view',

    initialize: function() {
        this.collection.on('change add remove', this.render, this);
    },

    render: function() {
        // Empty our element before rendering list items
        this.$el.empty();

        // Iterate over each list item and render it, appending each to our element
        this.collection.each(function(item) {
            var item_view = new ListItemView({ model: item });
            this.$el.append(item_view.render().$el);
        }.bind(this));

        return this;
    }
});

