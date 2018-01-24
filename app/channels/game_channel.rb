require_relative '../assets/inGameModels/game'
require_relative '../assets/inGameModels/playerAvatar'

class GameChannel < ApplicationCable::Channel
  


  def subscribed
  	$game ||= Game.new
  	$game.add current_user.avatars[0]
    stream_from "game_channel"
  end

  def unsubscribed
  	$game.remove current_user.avatars[0].id
    # Any cleanup needed when channel is unsubscribed
  end

  def send_move(data)
  	params = JSON.parse(data["move"])
  	# p $game.players
    avatar = $game.players.select{|pavatar|pavatar.params[:id] == params['id']}
    # p "avatar = " + avatar[0].to_s
    # unless avatar
    # 	avatar = Avatar.new(params)
    # 	@game.players.push avatar
    # 	avatar.save
    # end
     avatar[0].params[:xPos] = params['xPos']
     avatar[0].params[:yPos] = params['yPos']
     avatar[0].params[:colour] = params['colour']

    # avatar.save
    # p @game.players
    # ActionCable.server.broadcast "game_channel", Avatar.all.to_json
  end 



end
