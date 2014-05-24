FinalApp.Views.MemberTaskShow = Backbone.CompositeView.extend({
	template: JST['tasks/show'], 
	events: {
		"click button.destroyTask": "destroyTask", 
		"click button.editTask": "editTask"
	}, 

	initialize: function() {
		this.listenTo(this.model, "sync remove", this.render);
		debugger;
	},

	render: function() {
		var renderedContent = this.template({
			task: this.model
		});

		this.$el.html(renderedContent);

		return this;
	}, 

	destroyTask: function(event) {
		var that = this;
		event.preventDefault();
		this.model.destroy();
		this.model.fetch({
			success: function () {
				that.render;
			}
		});
	}, 

	editTask: function(event) {
		$(event.target).toggleClass('hidden');
		var editTaskView = new FinalApp.Views.TaskEdit({
			model: this.model, 
			collection: this.model.collection
		});

		this.$el.find('#task-edit').append(editTaskView.render().$el);
	}
});