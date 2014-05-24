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
		var that = this;
		event.preventDefault();
		var attrs = $(event.target.form).serializeJSON();
		this.model.save(attrs, {
			wait: true,
			success: function() {
				console.log("yep");
				that.collection.trigger('add');
			},
			error: function () {
				console.log("nope");
			}
		});
	}, 

	cancel: function(event) {
		event.preventDefault();
		Backbone.history.navigate("#/members/" + this.model.id, { trigger: true });
	}
})