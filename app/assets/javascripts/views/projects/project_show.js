FinalApp.Views.ProjectShow = Backbone.CompositeView.extend({
	template: JST['projects/show'],

	events: {
		"click button.destroyProject": "destroyProject", 
		"click button.newPhase": "newPhase", 
		"click button.editProject": "editProject"
	},

	initialize: function() {
		this.listenTo(this.model, "sync add", this.render);
		this.listenTo(this.collection, "sync remove", this.render);
		this.listenTo(this.collection, "add", this.addPhase);
		this.listenTo(this, "addPhase", this.render)
		this.collection.fetch();

	},

	addPhase: function(phase){
		var phaseView = new FinalApp.Views.PhaseShow({
			model: phase, 
			collection: phase.tasks()
		});
		this.addSubview('#phases', phaseView);	
	},

	render: function() {
		this.removeSubviews();
		
		var that = this;
		this.model.phases().each(function(phase){
			that.addPhase(phase);
		});

		var renderedContent = this.template({
			project: this.model
		});

		this.$el.html(renderedContent);

		this.attachSubviews();

		return this;
	},

	destroyProject: function(event) {
		event.preventDefault();
		this.model.destroy();
		Backbone.history.navigate("#/projects", { trigger: true });
	},

	newPhase: function(event) {
    	$(event.target).toggleClass('hidden');
		var newPhaseView = new FinalApp.Views.PhasesNew({
      		model: this.model,
      		collection: this.collection
		});

		this.$el.find('#phases-new').append(newPhaseView.render().$el);
	}, 

	editProject: function(event) {
		$(event.target).toggleClass('hidden');
		var editProjectView = new FinalApp.Views.ProjectEdit({
      		model: this.model,
      		collection: this.model.collection
		});

		this.$el.find('#project-edit').append(editProjectView.render().$el);
	}

});