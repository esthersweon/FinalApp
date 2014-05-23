FinalApp.Views.ProjectEdit = Backbone.View.extend({
	events: {
		'click input[type="submit"]': "update"
	}, 

	template: JST['projects/edit'], 

	render: function() {
		var renderedContent = this.template({
			project: this.model
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
	}
})