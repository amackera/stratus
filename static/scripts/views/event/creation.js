define(['backbone', 'marionette'], function(Backbone, Marionette) {
    return Backbone.View.extend({
        template: '#event-creation',

        events: {
            'click button.create-event': 'create_event'
        },

        initialize: function() {},

        render: function() {
            var rendered_template = _.template($(this.template).html())();        
            this.$el.empty();
            this.$el.append(rendered_template);
            return this;
        },

        create_event: function(e) {
            e.preventDefault();
            var title = this.$el.find('.event-title').val();
            var description = this.$el.find('.event-description').val();
            this.$el.html($('#loading').html());
            this.collection.create({ 
                title: title,
                description: description
            }, {
                wait: true,
                success: function (model, response, options) {
                    this.render();
                }.bind(this),
                error: function (model, xhr, options) {

                }
            });
        }
    });
});
