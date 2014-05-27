FinalApp.Collections.PhaseTasks = Backbone.Collection.extend({
	model: FinalApp.Models.Task, 
	url: function() {
		return "api/phases/" + this.phase.get("id") + "/tasks"
	}, 
	
	initialize: function (models, options) {
		this.phase = options.phase;
	}
})