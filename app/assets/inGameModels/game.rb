class Game 

  def initialize
  	@players = [] 
   
  	timer(0.02){tick}
  end
  def send_move(move)
    p move
    avatar = @players.select{|pavatar|pavatar.params[:id] == move['id']}
    p avatar
    if avatar.check_against(move['xPos'],move['yPos'])
      avatar[0].params[:xPos] = move['xPos']
      avatar[0].params[:yPos] = move['yPos']
      avatar[0].params[:colour] = move['colour']
    end
  end 

  def add avatar
    @players << PlayerAvatar.new({id: avatar.id, name: avatar.name, colour: avatar.colour, xPos: avatar.xPos, yPos: avatar.yPos })
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
  	    sleep time
  	    yield
	  end
 	}
  end

end
