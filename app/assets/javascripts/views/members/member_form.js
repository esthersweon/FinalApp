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
		var attrs = $(event.target.form).serializeJSON();

		var newMember = this.collection.create(attrs, {
			success: function() {
				this.collection.fetch({
					success: function(savedMember) {
						Backbone.history.navigate("#members/" + savedMember.id, {trigger: true});
						}
				});
			}
		});
	}, 

	cancel: function(event) {
		event.preventDefault();
		Backbone.history.navigate("", { trigger: true });
	}
})