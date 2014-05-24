FinalApp.Models.Member = Backbone.Model.extend({
	urlRoot: "api/members", 

	tasks: function() {
		debugger;
		if(!this._tasks){
			this._tasks = new FinalApp.Collections.Tasks([], {
				phase: this
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