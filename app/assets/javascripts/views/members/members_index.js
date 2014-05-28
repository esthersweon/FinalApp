FinalApp.Views.MembersIndex = Backbone.View.extend({
	template: JST['members/index'],

	events: {
		"click button#newMember": "newMember"
	},

	render: function() {
		var renderedContent = this.template({
			members: this.collection
		});

		this.$el.html(renderedContent);

		return this;
	}, 

	newMember: function() {
		$(event.target).toggleClass('hidden');
    	var newMember = new FinalApp.Models.Member();
		var memberForm = new FinalApp.Views.MemberForm({
      		model: newMember,
      		collection: this.collection
		});

		this.$el.find('#members-new').append(memberForm.render().$el);
	}
})