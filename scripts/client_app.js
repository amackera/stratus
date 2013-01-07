function initialize_app() {
    // Add a list of downtime events to the page
    var event_list = new ListCollection();
    var event_list_view = new ListView({ collection: event_list });
    $(document).find('body').append(event_list_view.render().$el);

    // Add a form to create new downtime events
    var creation_view = new ItemCreationView({ collection: event_list });
    $(document).find('body').append(creation_view.$el);
}
