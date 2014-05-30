# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do

	users = User.create([
			{username: "business", password: "business"}, 
			{username: "school", password: "school" }, 
			{username: "personal", password: "personal"}
		])

	members = Member.create([
			{user_id: 1, fname: "Alex", lname: "Cardona", role: "Film Production Office Manager", bio: "From Queens, NY. Aspiring TV showrunner."}, 
			{user_id: 1, fname: "Ian", lname: "Vitelli", role: "Producer's Assistant", bio: "From Bakersfield, CA. Aspiring TV producer."}, 
			{user_id: 1, fname: "Liam", lname: "Delman", role: "Film/ TV Producer", bio: "From Helena, Montana. Aspiring feature film director."}, 
			{user_id: 2, fname: "Rickie", lname: "Lin", role: "Team Member", bio: "Class of '15. Accounting major."}, 
			{user_id: 2, fname: "Michelle", lname: "Roddy", role: "Team Member", bio: "Class of '14. Business admin major."}, 
			{user_id: 2, fname: "Patty", lname: "Martinez", role: "Team Leader", bio: "Class of '14. Finance major."}, 
			{user_id: 3, fname: "Shane", lname: "Salomon", role: "Roommate", bio: "From Houston, Texas. Private accountant."}, 
			{user_id: 3, fname: "Ben", lname: "Dailey", role: "Roommate", bio: "From DC. Poli-sci student."}, 
			{user_id: 3, fname: "Crystal", lname: "Waschenfelder", role: "Roommate", bio: "From Los Angeles. Marketing intern."}
		])

	projects = Project.create([
			{user_id: 1, title: "Office Move", description: "Coordinating transition to new production offices.", end_date: "2015-01-31"}, 
			{user_id: 1, title: "Sell Our Feature Film", description: "Finding a market for our finished documentary.", end_date: "2015-02-28"}, 
			{user_id: 1, title: "Develop New TV Project Idea", description: "Developing a new idea for a primetime sitcom.", end_date: "2015-03-31"}, 
			{user_id: 2, title: "Start-Up Powerpoint", description: "Creating a deck for our hypothetical start-up.", end_date: "2015-01-31"}, 
			{user_id: 2, title: "Entrepreneur Interview", description: "Interviewing a current start-up founder for insight on our Start-Up Presentation.", end_date: "2015-02-28"}, 
			{user_id: 2, title: "Year in Review Essay", description: "Writing an essay about what we've learned in BUAD320.", end_date: "2015-03-31"}, 
			{user_id: 3, title: "Moving In", description: "Getting settled in to our new apartment.", end_date: "2015-01-31"}, 
			{user_id: 3, title: "Housewarming Party", description: "Inviting friends and family to see the new place.", end_date: "2015-02-28"}, 
			{user_id: 3, title: "Cabo Trip", description: "Planning a well-deserved vacation.", end_date: "2015-03-31"}
		])

	phases = Phase.create([
			{project_id: 1, title: "Packing Up", end_date: "2015-01-07"}, 
			{project_id: 1, title: "Making the Move", end_date: "2015-01-14"}, 
			{project_id: 1, title: "Settling In", end_date: "2015-01-21"}, 
			{project_id: 2, title: "Going to Cannes Film Festival", end_date: "2015-02-07"}, 
			{project_id: 2, title: "Talking to Film Sales Agents Around Hollywood", end_date: "2015-02-14"}, 
			{project_id: 2, title: "Hosting Screenings for Agents and Distributors", end_date: "2015-02-21"}, 
			{project_id: 3, title: "Write the Pilot", end_date: "2015-03-07"}, 
			{project_id: 3, title: "Get Feedback", end_date: "2015-03-14"}, 
			{project_id: 3, title: "Implement Changes to Pilot", end_date: "2015-03-21"}, 
			{project_id: 4, title: "Do Research", end_date: "2015-01-07"}, 
			{project_id: 4, title: "Divvy Up Slides", end_date: "2015-01-14"}, 
			{project_id: 4, title: "Practice Presentation", end_date: "2015-01-21"}, 
			{project_id: 5, title: "Find an Entrepreneur", end_date: "2015-02-07"}, 
			{project_id: 5, title: "Prepare for Interview", end_date: "2015-02-14"}, 
			{project_id: 5, title: "Conduct Interview", end_date: "2015-02-21"}, 
			{project_id: 6, title: "Organize Material", end_date: "2015-03-07"}, 
			{project_id: 6, title: "Split Up Sections", end_date: "2015-03-14"}, 
			{project_id: 6, title: "Turn In Physical Essay", end_date: "2015-03-21"}, 
			{project_id: 7, title: "Packing Up", end_date: "2015-01-07"}, 
			{project_id: 7, title: "Making the Move", end_date: "2015-01-14"}, 
			{project_id: 7, title: "Settling In", end_date: "2015-01-21"}, 
			{project_id: 8, title: "Organizing Logistics", end_date: "2015-02-07"}, 
			{project_id: 8, title: "Buying Supplies For the Party", end_date: "2015-02-14"}, 
			{project_id: 8, title: "Same-Day Logistics", end_date: "2015-03-21"}, 
			{project_id: 9, title: "Organizing Trip", end_date: "2015-03-07"}, 
			{project_id: 9, title: "Booking Travel", end_date: "2015-03-14"}, 
			{project_id: 9, title: "Pre-Flight Arrangements", end_date: "2015-03-21"}
		])

	tasks = Task.create([
			{phase_id: 1, member_id: 1, title: "Buying boxes and packing materials", status: "Incomplete"},
			{phase_id: 1, member_id: 2, title: "Throwing away unneeded or old furniture/ office supplies", status: "Incomplete"},
			{phase_id: 1, member_id: 3, title: "Packing sensitive files/ smaller furniture", status: "Incomplete"},
			{phase_id: 2, member_id: 1, title: "Look up moving van quotes", status: "Incomplete"},
			{phase_id: 2, member_id: 2, title: "Create an appointment", status: "Incomplete"},
			{phase_id: 2, member_id: 3, title: "Be present to facilitate move and oversee movers", status: "Incomplete"},
			{phase_id: 3, member_id: 1, title: "Unpack furniture into main offices", status: "Incomplete"},
			{phase_id: 3, member_id: 2, title: "Set up area for sensitive files", status: "Incomplete"},
			{phase_id: 3, member_id: 3, title: "Buy any new furniture as needed", status: "Incomplete"},
			{phase_id: 4, member_id: 1, title: "Send out memo to employees about festival dates", status: "Incomplete"},
			{phase_id: 4, member_id: 2, title: "Booking flights", status: "Incomplete"},
			{phase_id: 4, member_id: 3, title: "Booking hotel", status: "Incomplete"},
			{phase_id: 5, member_id: 1, title: "Create list of top talent agencies", status: "Incomplete"},
			{phase_id: 5, member_id: 2, title: "Get in touch with contacts with connections at these agencies", status: "Incomplete"},
			{phase_id: 5, member_id: 3, title: "Set up meetings and introductions", status: "Incomplete"},
			{phase_id: 6, member_id: 1, title: "Book venue", status: "Incomplete"},
			{phase_id: 6, member_id: 2, title: "Organize list of attendees", status: "Incomplete"},
			{phase_id: 6, member_id: 3, title: "Send out digital and physical invites", status: "Incomplete"},
			{phase_id: 7, member_id: 1, title: "Brainstorm with creative team", status: "Incomplete"},
			{phase_id: 7, member_id: 2, title: "Write general treatment", status: "Incomplete"},
			{phase_id: 7, member_id: 3, title: "Follow treatment for full-length pilot", status: "Incomplete"},
			{phase_id: 8, member_id: 1, title: "Book conference room for development meeting", status: "Incomplete"},
			{phase_id: 8, member_id: 2, title: "Take detailed meeting notes", status: "Incomplete"},
			{phase_id: 8, member_id: 3, title: "Decide on changes to implement and ignore", status: "Incomplete"},
			{phase_id: 9, member_id: 1, title: "Research top TV writers in industry", status: "Incomplete"},
			{phase_id: 9, member_id: 2, title: "Host meetings with top choices", status: "Incomplete"},
			{phase_id: 9, member_id: 3, title: "Discuss pilot expectations with hired writer", status: "Incomplete"}, 
			{phase_id: 10, member_id: 4, title: "Identify the pains of the marketplace", status: "Incomplete"},
			{phase_id: 10, member_id: 5, title: "Study comparable start-ups in the area", status: "Incomplete"},
			{phase_id: 10, member_id: 6, title: "Draft a general business plan outline", status: "Incomplete"},
			{phase_id: 11, member_id: 4, title: "Put together a mission statement", status: "Incomplete"},
			{phase_id: 11, member_id: 5, title: "Identify the consumer base and the need in the market", status: "Incomplete"},
			{phase_id: 11, member_id: 6, title: "Elaborate on business plan outline", status: "Incomplete"},
			{phase_id: 12, member_id: 4, title: "Book conference room at library", status: "Incomplete"},
			{phase_id: 12, member_id: 5, title: "Organize slide order and coordinate with order of speakers", status: "Incomplete"},
			{phase_id: 12, member_id: 6, title: "Bring ideas for creative presentation techniques/ props", status: "Incomplete"},
			{phase_id: 13, member_id: 4, title: "Make a list of interesting start-ups in the area", status: "Incomplete"},
			{phase_id: 13, member_id: 5, title: "Cold-email/ call companies for willing interviewees", status: "Incomplete"},
			{phase_id: 13, member_id: 6, title: "Set up interview", status: "Incomplete"},
			{phase_id: 14, member_id: 4, title: "Buy a proper suit", status: "Incomplete"},
			{phase_id: 14, member_id: 5, title: "Compile list of interview questions", status: "Incomplete"},
			{phase_id: 14, member_id: 6, title: "Drive by company to assess traffic and parking situation", status: "Incomplete"},
			{phase_id: 15, member_id: 4, title: "Set up recording equipment", status: "Incomplete"},
			{phase_id: 15, member_id: 5, title: "Ask prepared questions and ask for interviewee's own input", status: "Incomplete"},
			{phase_id: 15, member_id: 6, title: "Leave contact information for follow-up", status: "Incomplete"},
			{phase_id: 16, member_id: 4, title: "Break syllabus down into Most Interesting, Most Practical, and Most Inspiring units", status: "Incomplete"},
			{phase_id: 16, member_id: 5, title: "Compile all assignments and materials for the three units", status: "Incomplete"},
			{phase_id: 16, member_id: 6, title: "Create general outline of essay based on the three units", status: "Incomplete"},
			{phase_id: 17, member_id: 4, title: "3 pages on Most Interesting Unit", status: "Incomplete"},
			{phase_id: 17, member_id: 5, title: "3 pages on Most Practical Unit", status: "Incomplete"},
			{phase_id: 17, member_id: 6, title: "3 pages on Most Inspiring Unit", status: "Incomplete"},
			{phase_id: 18, member_id: 4, title: "Print and bind the essay at Staples", status: "Incomplete"},
			{phase_id: 18, member_id: 5, title: "Drop essay off at professor's office", status: "Incomplete"},
			{phase_id: 18, member_id: 6, title: "Email professor and teammates notifying of delivered paper", status: "Incomplete"}, 
			{phase_id: 19, member_id: 7, title: "Throwing away old/ damaged furniture", status: "Incomplete"},
			{phase_id: 19, member_id: 8, title: "Dropping off unwanted clothes and appliances at Goodwill", status: "Incomplete"},
			{phase_id: 19, member_id: 9, title: "Packing all small to medium-sized items", status: "Incomplete"},
			{phase_id: 20, member_id: 7, title: "Look up moving van quotes", status: "Incomplete"},
			{phase_id: 20, member_id: 8, title: "Create an appointment", status: "Incomplete"},
			{phase_id: 20, member_id: 9, title: "Be present to facilitate move and oversee movers", status: "Incomplete"},
			{phase_id: 21, member_id: 7, title: "General cleaning of all the rooms", status: "Incomplete"},
			{phase_id: 21, member_id: 8, title: "Unpack furniture into bedrooms", status: "Incomplete"},
			{phase_id: 21, member_id: 9, title: "Buy any new furniture as needed for communal area", status: "Incomplete"},
			{phase_id: 22, member_id: 7, title: "Notifying landlord and neighbor of party plans", status: "Incomplete"},
			{phase_id: 22, member_id: 8, title: "Booking the apartment complex swimming pool", status: "Incomplete"},
			{phase_id: 22, member_id: 9, title: "Sending out invitations via email/phone", status: "Incomplete"},
			{phase_id: 23, member_id: 7, title: "Buy utensils and napkins", status: "Incomplete"},
			{phase_id: 23, member_id: 8, title: "Buy more propane for the barbecue grill", status: "Incomplete"},
			{phase_id: 23, member_id: 9, title: "Buy barbecue and finger food (hot dogs, burgers, chips, soda, etc.)", status: "Incomplete"},
			{phase_id: 24, member_id: 7, title: "Move tables and barbecue grill down to the pool", status: "Incomplete"},
			{phase_id: 24, member_id: 8, title: "Pick up the pizzas", status: "Incomplete"},
			{phase_id: 24, member_id: 9, title: "Be on call to let guests in to the apartment complex", status: "Incomplete"},
			{phase_id: 25, member_id: 7, title: "Compile list of must-see landmarks", status: "Incomplete"},
			{phase_id: 25, member_id: 8, title: "Set budget for accommodations, food, etc.", status: "Incomplete"},
			{phase_id: 25, member_id: 9, title: "Chart out general schedule", status: "Incomplete"},
			{phase_id: 26, member_id: 7, title: "Book the hotels", status: "Incomplete"},
			{phase_id: 26, member_id: 8, title: "Book the flights", status: "Incomplete"},
			{phase_id: 26, member_id: 9, title: "Chart out necessary train/ bus station locations", status: "Incomplete"},
			{phase_id: 27, member_id: 7, title: "Get a friend to take care of the dog", status: "Incomplete"},
			{phase_id: 27, member_id: 8, title: "Ask friend to drop off at airport", status: "Incomplete"},
			{phase_id: 27, member_id: 9, title: "Ask neighbor to drop by to water the plants", status: "Incomplete"}
		])

end