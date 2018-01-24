class Game 

  def initialize
  	@players = [] 
   
  	timer(0.02){tick}
  end
  def send_move(move)
    avatar = @players.select{|pavatar|pavatar.params[:id] == move['id']}

    avatar[0].params[:xPos] = params['xPos']
    avatar[0].params[:yPos] = params['yPos']
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
  def tick
    ActionCable.server.broadcast "game_channel", @players.map{|player|player.params}.to_json
  end

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
