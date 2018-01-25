class Game

  def initialize
  	@players = []

  	timer(0.02){
      # ActionCable.server.broadcast "game_channel", @players.map{|player|player.params}.to_json
      # p "broadcasting!!!------------" + @players.to_s
      # p self
    }
  end
  def add avatar
    @players << PlayerAvatar.new({id: avatar.id, name: avatar.name, colour: avatar.colour, xPos: avatar.xPos, yPos: avatar.yPos })
    # p @players
  end

  def remove id
    @players.delete_if{|avatar|  avatar.params[:id] == id}
  end

  attr_accessor :players


private
  def timer (time)
  	Thread.new{
	  loop do
	    # p "loop"
  	    sleep time
  	    yield
	  end
 	}
  end
end
