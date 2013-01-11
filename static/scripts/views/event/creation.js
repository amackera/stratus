define(['backbone', 'marionette'], function(Backbone, Marionette) {
    return Backbone.View.extend({
        template: '#event-creation',

        events: {
            'click input.create-event': 'create_event'
        },

        initialize: function() {},

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
})
