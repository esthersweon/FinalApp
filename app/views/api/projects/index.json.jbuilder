json.array!(@projects) do |project|
  json.partial!("project", :project => project, :phases => @phases)
end