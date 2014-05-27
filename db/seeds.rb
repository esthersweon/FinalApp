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
		{id: 1, user_id: 1, fname: "Liam", lname: "Meloy", role: "TV Producer", bio: "From Helena, Montana. Aspiring film director and producer."}, 
		{id: 2, user_id: 1, fname: "Laura", lname: "Cardona", role: "Film Production Office Manager", bio: "From Queens, NY. Aspiring TV showrunner."}, 
		{id: 3, user_id: 1, fname: "Ian", lname: "Mayberry", role: "Producer's Assistant", bio: "From Bakersfield, CA. Aspiring film producer."}, 
		{id: 4, user_id: 2, fname: "Patty", lname: "Huang", role: "Team Leader", bio: "Class of '14. Finance major, aspiring entrepreneur."}, 
		{id: 5, user_id: 2, fname: "Rickie", lname: "Salinas", role: "Team Member", bio: "Class of '15. Accounting major, aspiring start-up founder."}, 
		{id: 6, user_id: 2, fname: "Michelle", lname: "Roddy", role: "Team Member", bio: "Class of '14. Business administration major, aspiring start-up founder."}, 
		{id: 7, user_id: 3, fname: "Shane", lname: "Wey", role: "Roommate", bio: "From Houston, Texas. Private accountant."}, 
		{id: 8, user_id: 3, fname: "Ben", lname: "Kenney", role: "Roommate", bio: "From DC. Poli-sci student."}, 
		{id: 9, user_id: 3, fname: "Crystal", lname: "Platas", role: "Roommate", bio: "From Los Angeles. Marketing intern."}
	])

projects = Project.create([
		{id: 1, user_id: 1, title: "Office Move", description: "Coordinating transition to new production offices.", end_date: "2015-01-31"}, 
		{id: 2, user_id: 1, title: "Sell Our Feature Film", description: "Finding a market for our finished documentary.", end_date: "2015-02-28"}, 
		{id: 3, user_id: 1, title: "Develop New TV Project Idea", description: "Developing a new idea for a primetime sitcom.", end_date: "2015-03-31"}, 
		{id: 4, user_id: 2, title: "Start-Up Powerpoint", description: "Creating a deck for our hypothetical start-up.", end_date: "2015-01-31"}, 
		{id: 5, user_id: 2, title: "Entrepreneur Interview", description: "Interviewing a current start-up founder for insight on our Start-Up Presentation.", end_date: "2015-02-28"}, 
		{id: 6, user_id: 2, title: "Year in Review Essay", description: "Writing an essay about what we've learned in BUAD320.", end_date: "2015-03-31"}, 
		{id: 7, user_id: 3, title: "Moving In", description: "Getting settled in to our new apartment.", end_date: "2015-01-31"}, 
		{id: 8, user_id: 3, title: "Housewarming Party", description: "Inviting friends and family to see the new place.", end_date: "2015-02-28"}, 
		{id: 9, user_id: 3, title: "Cabo Trip", description: "Planning a well-deserved vacation.", end_date: "2015-03-31"}
	])

phases = Phase.create([
		{id: 1, project_id: 1, title: "Packing Up", end_date: "2015-01-07"}, 
		{id: 2, project_id: 1, title: "Making the Move", end_date: "2015-01-14"}, 
		{id: 3, project_id: 1, title: "Settling In", end_date: "2015-01-21"}, 
		{id: 4, project_id: 2, title: "Going to Cannes Film Festival", end_date: "2015-02-07"}, 
		{id: 5, project_id: 2, title: "Talking to Film Sales Agents Around Hollywood", end_date: "2015-02-14"}, 
		{id: 6, project_id: 2, title: "Hosting Screenings for Agents and Distributors", end_date: "2015-02-21"}, 
		{id: 7, project_id: 3, title: "Write the Pilot", end_date: "2015-03-07"}, 
		{id: 8, project_id: 3, title: "Get Feedback", end_date: "2015-03-14"}, 
		{id: 9, project_id: 3, title: "Implement Changes to Pilot", end_date: "2015-03-21"}, 
		{id: 10, project_id: 4, title: "Do Research", end_date: "2015-01-07"}, 
		{id: 11, project_id: 4, title: "Divvy Up Slides", end_date: "2015-01-14"}, 
		{id: 12, project_id: 4, title: "Practice Presentation", end_date: "2015-01-21"}, 
		{id: 13, project_id: 5, title: "Find an Entrepreneur", end_date: "2015-02-07"}, 
		{id: 14, project_id: 5, title: "Prepare for Interview", end_date: "2015-02-14"}, 
		{id: 15, project_id: 5, title: "Conduct Interview", end_date: "2015-02-21"}, 
		{id: 16, project_id: 6, title: "Organize Material", end_date: "2015-03-07"}, 
		{id: 17, project_id: 6, title: "Split Up Sections", end_date: "2015-03-14"}, 
		{id: 18, project_id: 6, title: "Turn In Physical Essay", end_date: "2015-03-21"}, 
		{id: 19, project_id: 7, title: "Packing Up", end_date: "2015-01-07"}, 
		{id: 20, project_id: 7, title: "Making the Move", end_date: "2015-01-14"}, 
		{id: 21, project_id: 7, title: "Settling In", end_date: "2015-01-21"}, 
		{id: 22, project_id: 8, title: "Organizing Logistics", end_date: "2015-02-07"}, 
		{id: 23, project_id: 8, title: "Buying Supplies For the Party", end_date: "2015-02-14"}, 
		{id: 24, project_id: 8, title: "Same-Day Logistics", end_date: "2015-03-21"}, 
		{id: 25, project_id: 9, title: "Organizing Trip", end_date: "2015-03-07"}, 
		{id: 26, project_id: 9, title: "Booking Travel", end_date: "2015-03-14"}, 
		{id: 27, project_id: 9, title: "Pre-Flight Arrangements", end_date: "2015-03-21"}
	])

tasks = Task.create([
		{id: 1, phase_id: 1, member_id: 1, title: "Buying boxes and packing materials", status: "Incomplete"},
		{id: 2, phase_id: 1, member_id: 2, title: "Throwing away unneeded or old furniture/ office supplies.", status: "Incomplete"},
		{id: 3, phase_id: 1, member_id: 3, title: "Packing sensitive files/ smaller furniture", status: "Incomplete"},
		{id: 4, phase_id: 2, member_id: 1, title: "Look up moving van quotes", status: "Incomplete"},
		{id: 5, phase_id: 2, member_id: 2, title: "Create an appointment", status: "Incomplete"},
		{id: 6, phase_id: 2, member_id: 3, title: "Be present to facilitate move and oversee movers", status: "Incomplete"},
		{id: 7, phase_id: 3, member_id: 1, title: "Unpack furniture", status: "Incomplete"},
		{id: 8, phase_id: 3, member_id: 2, title: "Reorganize files", status: "Incomplete"},
		{id: 9, phase_id: 3, member_id: 3, title: "Buy any new furniture as needed", status: "Incomplete"},
		{id: 10, phase_id: 4, member_id: 1, title: "Send out memo to employees about festival dates", status: "Incomplete"},
		{id: 11, phase_id: 4, member_id: 2, title: "Booking flights", status: "Incomplete"},
		{id: 12, phase_id: 4, member_id: 3, title: "Booking hotel", status: "Incomplete"},
		{id: 13, phase_id: 5, member_id: 1, title: "Create list of top talent agencies", status: "Incomplete"},
		{id: 14, phase_id: 5, member_id: 2, title: "Get in touch with contacts with connections at these agencies", status: "Incomplete"},
		{id: 15, phase_id: 5, member_id: 3, title: "Set up meetings and introductions", status: "Incomplete"},
		{id: 16, phase_id: 6, member_id: 1, title: "Book venue", status: "Incomplete"},
		{id: 17, phase_id: 6, member_id: 2, title: "Organize list of attendees", status: "Incomplete"},
		{id: 18, phase_id: 6, member_id: 3, title: "Send out digital and physical invites", status: "Incomplete"},
		{id: 19, phase_id: 7, member_id: 1, title: "Brainstorm with creative team", status: "Incomplete"},
		{id: 20, phase_id: 7, member_id: 2, title: "Write general treatment", status: "Incomplete"},
		{id: 21, phase_id: 7, member_id: 3, title: "Follow treatment for full-length pilot", status: "Incomplete"},
		{id: 22, phase_id: 8, member_id: 1, title: "Book conference room for development meeting", status: "Incomplete"},
		{id: 23, phase_id: 8, member_id: 2, title: "Take detailed meeting notes", status: "Incomplete"},
		{id: 24, phase_id: 8, member_id: 3, title: "Decide on changes to implement and ignore", status: "Incomplete"},
		{id: 25, phase_id: 9, member_id: 1, title: "Research top TV writers in industry", status: "Incomplete"},
		{id: 26, phase_id: 9, member_id: 2, title: "Host meetings with top choices", status: "Incomplete"},
		{id: 27, phase_id: 9, member_id: 3, title: "Discuss pilot expectations with hired writer", status: "Incomplete"}
	])