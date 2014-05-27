FinalApp.Collections.MemberTasks = Backbone.Collection.extend({
	model: FinalApp.Models.Task, 
	url: function() {
		return "api/phases/" + this.phase_id + "/tasks"
	}, 
	
	initialize: function (models, options) {
		this.member = options.member;
	}
})