FinalApp.Views.PhaseShow = Backbone.CompositeView.extend({
	template: JST['phases/show'], 
	events: {
		"click button#addTask": "newTask", 
		"click button#deletePhase": "deletePhase", 
		"click button#editPhase": "editPhase", 
		"click button#deleteTask": "deleteTask",
		"click button#editTask": "editTask"
	}, 

	initialize: function() {
		// this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.collection, "sync remove", this.render);
		// this.listenTo(this.collection, "add", this.addTask); 
		// this.listenTo(this, "addTask editPhase", this.render)
		
		this.model.tasks().fetch();
	},

	addTask: function(task) {
		var taskView = new FinalApp.Views.TaskShow({
			model: task, 
			collection: FinalApp.members
		});
		this.addSubview('#tasks', taskView);
	},

	render: function() {
		this.removeSubviews();

		var renderedContent = this.template({
			phase: this.model, 
			tasks: this.model.tasks()
		});

		this.$el.html(renderedContent);

		var that = this;
		this.model.tasks().each(function(task){
			that.addTask(task);
		});

		this.attachSubviews();

		return this;
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

		var editTaskView = new FinalApp.Views.TaskEdit({
			model: taskToEdit,
			collection: this.model.collection
		});

		this.$el.find('#task-edit').append(editTaskView.render().$el);
	},

	newTask: function(event) {
		$(event.target).toggleClass('hidden');
		var newTaskView = new FinalApp.Views.TasksNew({
			model: this.model,
			collection: this.model.tasks()
		});

		this.$el.find('#tasks-new').append(newTaskView.render().$el);
	}, 

	displayPhase: function() {
		$(event.target).toggleClass('hidden');
		var phaseShow = new FinalApp.Views.PhaseShow({
			model: this.model, 
			collection: this.model.collection
		});

		this.$el.find('#phaseShow').append(phaseShow.render().$el);
	},

	deletePhase: function(event) {
		event.preventDefault();
		this.model.destroy();
	}, 

	editPhase: function(event) {
		$(event.target).toggleClass('hidden');
		var editPhaseView = new FinalApp.Views.PhaseEdit({
			model: this.model, 
			collection: this.model.collection
		});

		this.$el.find('#phase-edit').append(editPhaseView.render().$el);
	}
});