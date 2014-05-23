FinalApp.Views.ProjectForm = Backbone.View.extend({
	events: {
		'click input[type="submit"]': "submit", 
		'click button.cancel': "cancel"
	}, 

	template: JST['projects/form'], 

	render: function() {
		var renderedContent = this.template({
			project: this.model
		});

		this.$el.html(renderedContent);

		return this;
	},

	submit: function(event) {
		event.preventDefault();
		var attrs = $(event.target.form).serializeJSON();

		var newProject = this.collection.create(attrs, {
			success: function(savedProject) {
				Backbone.history.navigate("#projects/" + savedProject.id, {trigger: true});
			}
		});
	}, 

	cancel: function(event) {
		event.preventDefault();
		Backbone.history.navigate("", { trigger: true });
	}
})