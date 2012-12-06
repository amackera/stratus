var ListItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'list-item',
    template: '<li><%= content %></li>',
    
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

var ItemCreationView = Backbone.View.extend({
    template: '#item-creation',

    events: {
        'click input.create-event': 'create_event'
    },

    initialize: function() {
        this.render();
    },

    render: function() {
        var rendered_template = _.template($(this.template).html())();        
        this.$el.append(rendered_template);
        return this;
    },

    create_event: function(e) {
        e.preventDefault();
        this.collection.add({ content: 'test content' });
    }
});
