json.(task, :id, :member_id, :title, :status, :created_at, :updated_at, :phase_id)
json.project_id(task.project.id)
json.phase_title(task.phase.title)
json.project_title(task.project.title)

members ||= nil
unless members.nil?
  json.members(members) do |member|
    json.partial!("api/members/member", :member => member)
  end
end