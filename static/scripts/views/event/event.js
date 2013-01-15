define(['backbone', 'marionette'], function(Backbone, Marionette) {
    return Backbone.Marionette.ItemView.extend({
        template: '#event',
        initialize: function() {},
        render: function() {
            var rendered_template = _.template($(this.template).html())(this.model.attributes);
            this.$el.append(rendered_template);
            return this;
        },
    });
});
