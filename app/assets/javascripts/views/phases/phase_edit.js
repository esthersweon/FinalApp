FinalApp.Views.PhaseEdit = Backbone.View.extend({
	events: {
		'click input[type="submit"]': "update"
	}, 

	template: JST['phases/edit'], 

	render: function() {
		debugger;
		var renderedContent = this.template({
			phase: this.model
			//FIGURE OUT NOW. WHAT IS project: 
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