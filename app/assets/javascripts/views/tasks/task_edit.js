FinalApp.Views.TaskEdit = Backbone.View.extend({
	events: {
		'click input[type="submit"]': "update"
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
		debugger;
		this.model.save();
		this.model.trigger('sync');
	}
})