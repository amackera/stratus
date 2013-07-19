define([
    'backbone',
    'marionette',
    'views/event/event',
    'views/event/no_event'],
function(Backbone, Marionette, EventView, NoEventView) {
    return Backbone.Marionette.CollectionView.extend({
        itemView: EventView,
        emptyView: NoEventView,
        className: 'event-list',
        tagName: 'ul',
        appendHtml: function (collectionView, itemView, index) {
            collectionView.$el.prepend(itemView.el);
        }
    });
});
