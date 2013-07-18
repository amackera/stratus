define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            title: 'New event',
            duration: 0,
            current: true,
            description: 'New event description',
            date: new Date(Date.now())
        }
    });
});
