json.array!(@resources) do |resource|
  json.extract! resource, :id, :name, :keywords, :status, :active_from, :banned_at
  json.url resource_url(resource, format: :json)
end
