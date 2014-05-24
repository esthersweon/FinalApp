FinalApp.Views.ProjectsIndex = Backbone.View.extend({
	template: JST['projects/index'],

	render: function() {
		var renderedContent = this.template({
			projects: this.collection, 
			members: this.collection2
		});

		this.$el.html(renderedContent);

		return this;
	}
})