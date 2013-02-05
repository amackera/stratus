define([
    'backbone',
    'marionette'],
function(Backbone, Marionette) {
    return Backbone.Marionette.ItemView.extend({
        template: '#no-event',
        render: function() {
            var rendered_template = _.template($(this.template).html())();
            this.$el.append(rendered_template);
            return this;
        }
    });
});
    
