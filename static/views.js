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
        var name = this.$el.find('.event-name').val();
        var details = this.$el.find('.event-details').val();
        this.collection.add({ 
            name: name,
            details: details
        });
    }
});
