FinalApp.Views.MemberShow = Backbone.CompositeView.extend({
	template: JST['members/show'],

	events: {
		"click button.editMember": "editMember", 
		"click button.destroyMember": "destroyMember"
	},

	initialize: function() {
		console.log('view initalized')
		// this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.collection, "sync remove", this.render);
		this.listenTo(this.collection, "add", this.addTask);
		// this.listenTo(this, "addTask editMember", this.render);
		var that = this;
		this.collection.fetch();
		
	},

	addTask: function(task) {
		var taskView = new FinalApp.Views.MemberTasksShow({
			model: task
		});
		this.addSubview('#tasks', taskView);
	},

	render: function() {
		console.log('render called')
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
	}

});