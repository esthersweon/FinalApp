json.(project, :id, :user_id, :title, :description, :end_date, :created_at, :updated_at)


phases ||= nil
unless phases.nil?
  json.phases(phases) do |phase|
    json.partial!("api/phases/phase", :phase => phase)
  end
end