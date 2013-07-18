define(['backbone', 'marionette'], function(Backbone, Marionette) {
    return Backbone.View.extend({
        template: '#event-creation',

        events: {
            'click button.create-event': 'create_event'
        },

        initialize: function() {},

        render: function() {
            var rendered_template = _.template($(this.template).html())();        
            this.$el.append(rendered_template);
            return this;
        },

        create_event: function(e) {
            e.preventDefault();
            var title = this.$el.find('.event-title').val();
            var description = this.$el.find('.event-description').val();
            this.collection.add({ 
                title: title,
                description: description
            });
        }
    });
})
