class GamesController < ApplicationController
  def game
  	# Game.delete_all
  	# Game.create
  	

    if !current_user.avatars[0]	
    	@avatar = current_user.avatars.build(xPos: 500, yPos: 500, name: current_user.name)
    	@avatar.save
    end
    @avatar = current_user.avatars[0]
  end
end
