json.(member, :id, :user_id, :fname, :lname, :role, :bio, :created_at, :updated_at)

tasks ||= nil
unless tasks.nil?
  json.tasks(tasks) do |task|
    json.partial!("api/tasks/task", :task => task)
  end
end