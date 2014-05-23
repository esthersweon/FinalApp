FinalApp.Views.MemberEdit = Backbone.View.extend({
	events: {
		'click input[type="submit"]': "submit"
	}, 

	template: JST['members/edit'], 

	render: function() {
		var renderedContent = this.template({
			member: this.model
		});

		this.$el.html(renderedContent);

		return this;
	},

	submit: function(event) {
		event.preventDefault();
		debugger;
		var attrs = $(event.target.form).serializeJSON();

		var newMember = this.model.collection.update(attrs, {
			success: function(updatedMember) {
				Backbone.history.navigate("#members/" + updatedMember.id, {trigger: true});
			}
		});
	}
})