FinalApp.Views.MemberForm = Backbone.View.extend({
	events: {
		'click input[type="submit"]': "submit", 
		"click button.cancel": "cancel"
	}, 

	template: JST['members/form'], 

	render: function() {
		var renderedContent = this.template({
			member: this.model
		});

		this.$el.html(renderedContent);

		return this;
	},

	submit: function(event) {
		event.preventDefault();
		var attrs = $(event.target.form).serializeJSON().member;
		var members = this.collection;
		debugger;

		this.collection.create(attrs, {
			wait: true,
			success: function(savedMember) {
				members.add(savedMember);
				Backbone.history.navigate("#members/" + savedMember.id, {trigger: true});
				}
		});
	}, 

	cancel: function(event) {
		event.preventDefault();
		Backbone.history.navigate("#/members", { trigger: true });
	}
})