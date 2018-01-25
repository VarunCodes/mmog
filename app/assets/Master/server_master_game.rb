require 'therubyracer'
require_relative '../inGameModels/timer'
class ServerMasterGame
  
  def initialize
  	
  	@context = V8::Context.new

  	load_files_into @context
  	stub_interface_in @context

  	@context.eval("game = new Game(myChannel, null, myInterface)")
  	@game = @context[:game]
  	# @context.eval('myplayer = new Avatar(500,500,"test",1,1); game.createPlayer(myplayer)')
  	start_main_timer
  	start_broadcast_timer

  	
  end

  
  def send_move (move)
  	@game.sendMove(move)
  end

  def add (avatar)
  	@context.eval("
  	  var newAvatar = new Avatar(
  	  	#{avatar.xPos},#{avatar.xPos},
  	  	'#{avatar.name}',#{avatar.id},
  	   	40,'#{avatar.colour}'
  	  );
  	  game.board.addAvatar(newAvatar);
  	")
   end

  def remove (avatar_id)
  	@game.board.removeAvatar(avatar_id)
  end

  private

  def getfilepath
  	File.expand_path(File.dirname(__FILE__))
  end


  def load_files_into context
  	filepath = getfilepath
  	context.load("#{filepath}/../javascripts/game/avatar.js")
  	context.load("#{filepath}/../javascripts/game/board.js")
  	context.load("#{filepath}/../javascripts/game/game.js")
  end

  def stub_interface_in context
  	context.eval("
  	  myChannel = function(){};
  	  myChannel.send_move = function(){};
  	  myInterface = {draw: function(){}, addKeyHandlers: function(){}};
  	")
  end

  def start_main_timer
  	timer = Timer.new {@context.eval('tick(game)')}	
  	timer.start(0.02)
  end

  def start_broadcast_timer
	timer = Timer.new {broadcast_all}
  	timer.start(1)
  end

  def broadcast_all
  	p 'broadcasting'
  	ActionCable.server.broadcast "game_channel", @game.board.avatars.to_json
  end


end
