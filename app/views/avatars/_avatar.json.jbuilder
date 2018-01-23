json.extract! avatar, :id, :user_id, :xPos, :yPos, :name, :created_at, :updated_at
json.url avatar_url(avatar, format: :json)
