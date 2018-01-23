class GameChannel < ApplicationCable::Channel
  def subscribed
    stream_from "game_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send_move(data)
  	params = JSON.parse(data["move"])
    avatar = Avatar.find(params['id'])
    avatar.attributes = params
    avatar.save
  end 

end
