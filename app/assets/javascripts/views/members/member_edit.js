FinalApp.Views.MemberEdit = Backbone.View.extend({
	events: {
		'click input[type="submit"]': "update", 
		'click button.cancel': "cancel"
	}, 

	template: JST['members/edit'], 

	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.collection, "sync add remove", this.render);
	},

	render: function() {
		var renderedContent = this.template({
			member: this.model
		});

		this.$el.html(renderedContent);

		return this;
	},

	update: function(event) {
		event.preventDefault();
		var attrs = $(event.target.form).serializeJSON();
		this.model.set(attrs);
		this.model.save();
		this.collection.fetch();
		this.collection.trigger('add');
	}, 

	cancel: function(event) {
		event.preventDefault();
		Backbone.history.navigate("#/members/" + this.model.id, { trigger: true });
	}
})