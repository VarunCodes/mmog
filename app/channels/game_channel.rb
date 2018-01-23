class GameChannel < ApplicationCable::Channel
  def subscribed
    stream_from "game_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send_move(data)
  	p data
    current_user.avatars.create!(data['move'])
  end
end
