FinalApp.Collections.PhaseTasks = Backbone.Collection.extend({
	model: FinalApp.Models.Task, 
	url: function() {
		return "api/phases/" + this.phase.id + "/tasks"
	}, 
	
	initialize: function (models, options) {
		this.phase = options.phase;
		this.member = options.member;
	}
})