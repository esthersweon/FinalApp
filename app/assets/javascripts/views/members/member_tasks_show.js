FinalApp.Views.MemberTasksShow = Backbone.CompositeView.extend({
	template: JST['tasks/member_show'], 

	events: {
		"click button#editTask": 'editTask'
	},

	render: function() {
		var project = this;
		var renderedContent = this.template({
			task: this.model
		});

		this.$el.html(renderedContent);
		console.log(this.$el.html())
		return this;
	},

	editTask: function(event) {
		event.preventDefault();
		var editTaskView = new FinalApp.Views.MemberTaskEdit({
			model: this.model,
			collection: this.model.collection
		});

		this.$el.find('#task-edit').append(editTaskView.render().$el);
	},
});