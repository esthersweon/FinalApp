FinalApp.Views.DashboardView = Backbone.View.extend({

	template: JST['dashboard/view'], 

	initialize: function(options) {
		this.collection2 = options.collection2;
	},

	render: function() {
		var renderedContent = this.template({
			projects: this.collection,
			members: this.collection2
		});

		Shepherd.mediator.trigger('dashboardRendered');

		this.$el.html(renderedContent);

		return this;
	}
})