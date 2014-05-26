FinalApp.Views.MemberTasksShow = Backbone.CompositeView.extend({
	template: JST['tasks/member_show'], 

	render: function() {
		var project = this;
		var renderedContent = this.template({
			task: this.model
		});

		this.$el.html(renderedContent);

		return this;
	}
});