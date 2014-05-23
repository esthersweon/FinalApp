FinalApp.Views.MemberShow = Backbone.CompositeView.extend({
	template: JST['members/show'],

	events: {
		"click button.editMember": "editMember", 
		"click button.destroyMember": "destroyMember"
	},

	initialize: function() {
		this.listenTo(this.model, "sync change:fname change:lname change:bio remove", this.render);
	},

	render: function() {
		var renderedContent = this.template({
			member: this.model
		});

		this.$el.html(renderedContent);

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
		Backbone.history.navigate("", { trigger: true });
	}

});