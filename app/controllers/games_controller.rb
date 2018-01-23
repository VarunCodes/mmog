class GamesController < ApplicationController
  def game
  	p 'In Game'
    if !current_user.avatars[0]
    	p 'build'
    	@avatar = current_user.avatars.build(xPos: 500, yPos: 500, name: current_user.name)
    	p 'saved' if @avatar.save
    end
    p @avatar = current_user.avatars[0]
  end
end
