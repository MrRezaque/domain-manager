json.array!(@keylists) do |keylist|
  json.extract! keylist, :id, :keywords, :active
  json.url keylist_url(keylist, format: :json)
end
