FinalApp.Views.MemberShow = Backbone.CompositeView.extend({
	template: JST['members/show'],

	events: {
		"click button.editMember": "editMember", 
		"click button.destroyMember": "destroyMember"
	},

	initialize: function() {
		this.listenTo(this.model, "sync change:fname change:lname change:bio", this.render);
		this.listenTo(this.collection, "sync remove", this.render);
		this.listenTo(this.collection, "add", this.addTask);

		var that = this;
		this.model.tasks().each(function(task){
			that.addTask(task);
		});
	},

	addTask: function(task) {
		var taskView = new FinalApp.Views.MemberTasksShow({
			model: task
		});
		this.addSubview('#tasks', taskView);
	},

	render: function() {
		var renderedContent = this.template({
			member: this.model
		});

		this.$el.html(renderedContent);

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
	}

});