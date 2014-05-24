FinalApp.Views.DashboardView = Backbone.View.extend({

	template: JST['dashboard/view'], 

	render: function() {
		var renderedContent = this.template();

		this.$el.html(renderedContent);

		return this;
	}
})