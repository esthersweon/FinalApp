FinalApp.Views.TaskShow = Backbone.CompositeView.extend({
	template: JST['tasks/show'], 

	events: {
		"click input[type='submit']": "submit"
	}, 

	initialize: function() {
		this.listenTo(this.model, "sync remove", this.render)
	},

	render: function() {
		var member = this.collection.get(this.model.attributes.member_id);

		var renderedContent = this.template({
			task: this.model, 
			member: member
		});

		this.$el.html(renderedContent);

		return this;
	}, 

	submit: function(event) {
		var that = this;
		event.preventDefault();
		var attrs = $(event.target.form).serializeJSON();

		this.model.save(attrs, {
      		success: function (data) {
        		that.render();
      		}, 
      		error: function() {

      		}
    	});	
	}
});