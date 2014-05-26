FinalApp.Views.TaskShow = Backbone.CompositeView.extend({
	template: JST['tasks/show'], 

	events: {
		"click input[type='submit']": "submit", 
		"click button.cancel": "cancel"
	}, 

	initialize: function() {
		this.listenTo(this.model, "sync remove", this.render);
	},

	render: function() {
		var renderedContent = this.template({
			task: this.model
		});

		this.$el.html(renderedContent);

		return this;
	}, 

	submit: function(event) {
		event.preventDefault();
		var attrs = $(event.target.form).serializeJSON();
		var phases = this.collection;

    	this.collection.create(attrs, {
      		success: function (data) {
        		phases.add(data);
        		Backbone.history.navigate("#projects/" + phases.project.attributes.id, { trigger: true });
      		}, 
      		error: function() {

      		}
    	});	
	}, 

	cancel: function(event) {
		event.preventDefault();
		Backbone.history.navigate("#/projects/" + this.model.id, { trigger: true });
	}
});