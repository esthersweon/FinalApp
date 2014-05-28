FinalApp.Views.MemberShow = Backbone.CompositeView.extend({
	template: JST['members/show'],

	events: {
		"click button#editMember": "editMember", 
		"click button.destroyMember": "destroyMember", 
		"click button#deleteTask": "deleteTask",
		"click button#editTask": "editTask"
	},

	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.collection, "sync remove", this.render);
		this.listenTo(this.collection, "add", this.addTask);
		// this.listenTo(this, "addTask editMember", this.render);
		// this.collection.fetch();
		
	},

	addTask: function(task) {
		var taskView = new FinalApp.Views.MemberTasksShow({
			model: task
		});
		this.addSubview('#tasks', taskView);
	},

	render: function() {
		this.removeSubviews();

		var renderedContent = this.template({
			member: this.model
		});
		this.$el.html(renderedContent);

		var that = this;
		this.collection.each(function(task){
			that.addTask(task);
		});

		this.attachSubviews();

		return this;
	},

	editMember: function(event) {
		$(event.target).toggleClass('hidden');
		var editMemberView = new FinalApp.Views.MemberEdit({
			model: this.model, 
			collection: this.model.collection
		});

		this.$el.find('#member-edit').append(editMemberView.render().$el);
	},

	destroyMember: function(event) {
		event.preventDefault();
		this.model.destroy();
		Backbone.history.navigate("#/members", { trigger: true });
	}, 

	deleteTask: function(event) {
		event.preventDefault();
		var taskID = event.currentTarget.dataset.id;
		var taskToDelete = this.collection.get({id: taskID});
		taskToDelete.url = this.collection.url() + "/" + taskToDelete.id;
		
		var that = this;
		taskToDelete.destroy({
			success: function () {
				that.collection.remove(taskToDelete);
			}
		});
	},

	editTask: function(event) {
		$(event.target).toggleClass('hidden');
		var taskID = event.currentTarget.dataset.id;
		var taskToEdit = this.model.tasks().get({id: taskID});

		var editTaskView = new FinalApp.Views.MemberTaskEdit({
			model: taskToEdit,
			collection: this.collection
		});

		this.$el.find('#task-edit').append(editTaskView.render().$el);
	},

});