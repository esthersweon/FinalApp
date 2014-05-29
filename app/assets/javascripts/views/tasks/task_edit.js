FinalApp.Views.TaskEdit = Backbone.View.extend({
	events: {
		'click input[type="submit"]': "update", 
		"click button#cancel": "cancel"
	}, 

	template: JST['tasks/edit'], 

	render: function() {
		var renderedContent = this.template({
			task: this.model,
			phaseID: this.model.attributes.phase_id, 
			members: FinalApp.members
		});

		this.$el.html(renderedContent);

		return this;
	},

	update: function(event) {
		event.preventDefault();
		var attrs = $(event.target.form).serializeJSON().task;
		this.model.set(attrs);
		this.model.save();
		this.collection.trigger('sync');
		// this.collection.trigger('add', this.model);
	}, 

	cancel: function(event) {
		event.preventDefault();
		Backbone.history.navigate("#/projects/" + this.collection.project.id, { trigger: true });
	}
})