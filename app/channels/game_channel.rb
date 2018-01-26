# require_relative '../assets/inGameModels/game'
require_relative '../assets/Master/server_master_game'

class GameChannel < ApplicationCable::Channel



  def subscribed
  	$game ||= ServerMasterGame.new
  	$game.add current_user.avatars[0]
    stream_from "game_channel"
  end

  def unsubscribed
  	# $game.remove current_user.avatars[0].id
    # Any cleanup needed when channel is unsubscribed
  end

  def send_move(data)
  	params = JSON.parse(data["move"])
    # p params
    ActionCable.server.broadcast "game_channel", params.to_json

     $game.send_move(data["move"])

  end

  def send_position(data)
    params = data['position']
    $game.send_position(params)
    # avatar = $game.players.select{|pavatar|pavatar.params[:id] == params['id']}
    # unless avatar
    # 	avatar = Avatar.new(params)
    # 	$game.players.push avatar
    # 	avatar.save
    # end
    # avatar[0].params[:xPos] = params['xPos']
    # avatar[0].params[:yPos] = params['yPos']
    # avatar[0].params[:colour] = params['colour']
    # p $game.players
  end



end
