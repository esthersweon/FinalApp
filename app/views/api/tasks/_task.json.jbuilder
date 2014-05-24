json.(task, :id, :phase_id, :member_id, :title, :status, :created_at, :updated_at)

members ||= nil
unless members.nil?
  json.members(members) do |member|
    json.partial!("api/members/member", :member => member)
  end
end