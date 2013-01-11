define(['backbone', 'marionette', 'views/event/event'], function(Backbone, Marionette, EventView) {
    return Backbone.Marionette.CollectionView.extend({
        itemView: EventView
    });
});
