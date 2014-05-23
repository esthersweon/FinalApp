FinalApp.Views.TasksNew = Backbone.View.extend({
	template: JST['tasks/new'],

	events: {
		"click input[type='submit']": "submit"
	}, 

	render: function() {
		debugger;
		var renderedContent = this.template({
			task: new FinalApp.Models.Task(),
			phaseID: this.model.id
			//currentUserID: this.model.collection.project.collection.models[0].attributes.user_id
		});

		this.$el.html(renderedContent);

		return this;
	}, 

	submit: function(event) {
		event.preventDefault();
		var attrs = $(event.target.form).serializeJSON();
		var tasks = this.collection;

		this.collection.create(attrs, {
			success: function(data) {
				tasks.add(data);
				Backbone.history.navigate("#projects/" + tasks.phase.attributes.project_id, { trigger: true });
			}
		})
	}
})