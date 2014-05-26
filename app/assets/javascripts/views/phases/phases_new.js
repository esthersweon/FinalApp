FinalApp.Views.PhasesNew = Backbone.View.extend({
	template: JST["phases/new"],

	events: {
		"click input[type='submit']": "submit", 
		"click button.cancel": "cancel"
	}, 

	initialize: function() {
		this.listenTo(this, "submit", this.render)
	}, 

	render: function() {
		var renderedContent = this.template({ 
			phase: new FinalApp.Models.Phase(),
			project: this.model
		});

		this.$el.html(renderedContent);

		return this;
	}, 

	submit: function(event) {
		event.preventDefault();
		var attrs = $(event.target.form).serializeJSON();
		var phases = this.collection;

    	this.collection.create(attrs, {
      		success: function (data) {
        		phases.add(data);
        		Backbone.history.navigate("#projects/" + phases.project.attributes.id, { trigger: true });
      		}, 
      		error: function() {
      		},
      		wait: true
    	});	
	}, 

	cancel: function(event) {
		event.preventDefault();
		Backbone.history.navigate("#/projects/" + this.model.id, { trigger: true });
	}
});