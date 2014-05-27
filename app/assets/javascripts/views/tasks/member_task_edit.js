FinalApp.Views.MemberTaskEdit = Backbone.View.extend({
	events: {
		'click input[type="submit"]': "update", 
		"click button.cancel": "cancel"
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
		debugger;
		event.preventDefault();
		var attrs = $(event.target.form).serializeJSON().task;
		this.model.set(attrs);
		this.model.save();
		this.collection.trigger('sync');
	}, 

	cancel: function(event) {
		debugger;
		event.preventDefault();
		Backbone.history.navigate("#/members/" + this.collection.member.id, { trigger: true });
	}
})