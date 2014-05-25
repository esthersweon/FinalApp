FinalApp.Views.ProjectsIndex = Backbone.View.extend({
	template: JST['projects/index'],

	events: {
		"click button.newProject": "newProject"
	},

	initialize: function() {
		this.listenTo(this.collection, "add", this.addProject);
		this.collection.fetch();
	},

	render: function() {
		var renderedContent = this.template({
			projects: this.collection, 
			members: this.collection2
		});

		this.$el.html(renderedContent);

		return this;
	}, 

	addProject: function() {

	}, 

	newProject: function() {
    	$(event.target).toggleClass('hidden');
    	var newProject = new FinalApp.Models.Project();
		var projectForm = new FinalApp.Views.ProjectForm({
      		model: newProject,
      		collection: this.collection
		});

		this.$el.find('#projects-new').append(projectForm.render().$el);
	}
})