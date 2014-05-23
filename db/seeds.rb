# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


users = User.create([
		{id: 1, username: "Business", password: "Business"}, 
		{id: 2, username: "School", password: "School" }, 
		{id: 3, username: "Personal", password: "Personal"}
	])

members = Member.create([
		{id: 1, user_id: 1, fname: "", lname: "", bio: ""}, 
		{id: 2, user_id: 1, fname: "", lname: "", bio: ""}, 
		{id: 3, user_id: 1, fname: "", lname: "", bio: ""}, 
		{id: 4, user_id: 2, fname: "", lname: "", bio: ""}, 
		{id: 5, user_id: 2, fname: "", lname: "", bio: ""}, 
		{id: 6, user_id: 2, fname: "", lname: "", bio: ""}, 
		{id: 7, user_id: 3, fname: "", lname: "", bio: ""}, 
		{id: 8, user_id: 3, fname: "", lname: "", bio: ""}, 
		{id: 9, user_id: 3, fname: "", lname: "", bio: ""}
	])

projects = Project.create([
		{id: 1, user_id: 1, title: "", description: "", end_date: "2015-01-01"}, 
		{id: 2, user_id: 1, title: "", description: "", end_date: "2015-02-01"}, 
		{id: 3, user_id: 1, title: "", description: "", end_date: "2015-03-01"}, 
		{id: 4, user_id: 2, title: "", description: "", end_date: "2015-01-01"}, 
		{id: 5, user_id: 2, title: "", description: "", end_date: "2015-02-01"}, 
		{id: 6, user_id: 2, title: "", description: "", end_date: "2015-03-01"}, 
		{id: 7, user_id: 3, title: "", description: "", end_date: "2015-01-01"}, 
		{id: 8, user_id: 3, title: "", description: "", end_date: "2015-02-01"}, 
		{id: 9, user_id: 3, title: "", description: "", end_date: "2015-03-01"}
	])

phases = Phase.create([
		{id: 1, project_id: 1, title: "", end_date: ""}, 
		{id: 2, project_id: 1, title: "", end_date: ""}, 
		{id: 3, project_id: 1, title: "", end_date: ""}, 
		{id: 4, project_id: 2, title: "", end_date: ""}, 
		{id: 5, project_id: 2, title: "", end_date: ""}, 
		{id: 6, project_id: 2, title: "", end_date: ""}, 
		{id: 7, project_id: 3, title: "", end_date: ""}, 
		{id: 8, project_id: 3, title: "", end_date: ""}, 
		{id: 9, project_id: 3, title: "", end_date: ""}
	])

tasks = Task.create([
		{id: 1, phase_id: 1, member_id: 1, title: "", status: "Incomplete"},
		{id: 1, phase_id: 2, member_id: 2, title: "", status: "Incomplete"},
		{id: 1, phase_id: 3, member_id: 3, title: "", status: "Incomplete"},
		{id: 2, phase_id: 1, member_id: 1, title: "", status: "Incomplete"},
		{id: 2, phase_id: 2, member_id: 2, title: "", status: "Incomplete"},
		{id: 2, phase_id: 3, member_id: 3, title: "", status: "Incomplete"},
		{id: 3, phase_id: 1, member_id: 1, title: "", status: "Incomplete"},
		{id: 3, phase_id: 2, member_id: 2, title: "", status: "Incomplete"},
		{id: 3, phase_id: 3, member_id: 3, title: "", status: "Incomplete"},
	])