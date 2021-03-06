FinalApp.Routers.Projects = Backbone.Router.extend({
	initialize: function (options) {
		this.projects = options.projects;
		this.members = options.members;
		this.$rootEl = options.$rootEl;
	}, 

	routes: {
		"": "dashboardView",
		"projects": "projectsIndex", 
		"projects/:id": "projectShow",
		"members": "membersIndex",
		"members/:id": "memberShow"
	}, 

	dashboardView: function() {
		var that = this;
		
		this.projects.fetch({
			success: function () {
				that.members.fetch({
					success: function() {
						var dashboardView = new FinalApp.Views.DashboardView({
						collection: that.projects, 
						collection2: that.members
					});

					that._swapView(dashboardView);
					}
				});
			}
		});
	},

	projectsIndex: function() {
		var that = this;
		
		this.projects.fetch({
			success: function () {
				var indexView = new FinalApp.Views.ProjectsIndex({
					collection: that.projects
				});

				that._swapView(indexView);
			}
		});
	},

	projectShow: function(id) {
		var project = this.projects.getOrFetch(id);
		var showView = new FinalApp.Views.ProjectShow({
			model: project,
			collection: project.phases()
		});
		this._swapView(showView);
	},

	membersIndex: function() {
		var that = this;
		this.members.fetch({
			success: function () {
				var memberView = new FinalApp.Views.MembersIndex({
					collection: that.members
				});
			that._swapView(memberView)
			}
		})
	},

	memberShow: function(id) {
		var member = this.members.getOrFetch(id);
		var memberShowView = new FinalApp.Views.MemberShow({
			model: member, 
			collection: member.tasks()
		});
		//member.tasks().fetch();
		this._swapView(memberShowView);
	},

	_swapView: function(view) {
		this._currentView && this._currentView.remove();
    	this._currentView = view;
    	this.$rootEl.html(view.render().$el);
	}
})