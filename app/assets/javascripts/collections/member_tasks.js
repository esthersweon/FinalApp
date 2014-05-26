FinalApp.Collections.MemberTasks = Backbone.Collection.extend({
	model: FinalApp.Models.Task, 
	url: function() {
		return "api/members/" + this.member.id
	}, 
	
	initialize: function (models, options) {
		this.member = options.member;
	}
})