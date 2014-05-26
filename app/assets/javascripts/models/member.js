FinalApp.Models.Member = Backbone.Model.extend({
	urlRoot: "api/members", 

	tasks: function() {
		if(!this._tasks){
			this._tasks = new FinalApp.Collections.MemberTasks([], {
				member: this
			});
		}
		return this._tasks;
	}, 

	parse: function(response) {
		if(response.tasks){
			this.tasks().set(response.tasks, {parse: true});
			delete response.tasks;
		}

		return response;
	}
})