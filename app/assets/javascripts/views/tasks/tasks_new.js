FinalApp.Views.TasksNew = Backbone.View.extend({
	template: JST['tasks/new'],

	events: {
		"click input[type='submit']": "submit", 
		"click button.cancel": "cancel"
	}, 

	render: function() {
		var renderedContent = this.template({
			task: new FinalApp.Models.Task(),
			phaseID: this.model.attributes.id, 
			members: FinalApp.members
		});

		this.$el.html(renderedContent);

		return this;
	}, 

	submit: function(event) {
		event.preventDefault();
		var attrs = $(event.target.form).serializeJSON().task;
		var tasks = this.collection;

		this.collection.create(attrs, {
			success: function(data) {
				console.log('success')
				debugger
				tasks.add(data);
				Backbone.history.navigate("#/projects/" + tasks.phase.attributes.project_id, { trigger: true });
			}
		})
	}, 

	cancel: function(event) {
		event.preventDefault();
		var tasks = this.collection;
		Backbone.history.navigate("#/projects/" + tasks.phase.attributes.project_id, { trigger: true });
	}
})