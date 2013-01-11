define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
        defauts: {
            title: 'New event',
            duration: 0,
            current: true,
            description: 'New event description'
        }
    });
});
