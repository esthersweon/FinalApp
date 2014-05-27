FinalApp.Collections.MemberTasks = Backbone.Collection.extend({
	model: FinalApp.Models.Task, 
	url: "api/members",
	
	initialize: function (models, options) {
		this.member = options.member;
	}
})