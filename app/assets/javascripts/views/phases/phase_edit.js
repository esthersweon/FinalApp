FinalApp.Views.PhaseEdit = Backbone.View.extend({
	events: {
		'click input[type="submit"]': "update", 
		'click button.cancel': "cancel"
	}, 

	template: JST['phases/edit'], 

	render: function() {
		var renderedContent = this.template({
			phase: this.model
		});

		this.$el.html(renderedContent);

		return this;
	},

	update: function(event) {
		event.preventDefault();
		var attrs = $(event.target.form).serializeJSON();
		this.model.set(attrs);
		this.model.save();
		this.collection.trigger('add');
	}, 

	cancel: function(event) {
		event.preventDefault();
		Backbone.history.navigate("#/projects/" + this.model.attributes.project_id, { trigger: true });
	}
})