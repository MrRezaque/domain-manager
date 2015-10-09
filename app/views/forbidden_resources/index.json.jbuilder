json.array!(@forbidden_resources) do |forbidden_resource|
  json.extract! forbidden_resource, :id, :name
  json.url forbidden_resource_url(forbidden_resource, format: :json)
end
