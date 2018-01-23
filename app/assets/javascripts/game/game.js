function Game(channel,board = new Board(), myinterface = new Interface()) {
  this.board = board
  this.interface = myinterface
  this.interface.addKeyHandlers()
  this.player;
  this.channel = channel;

}

Game.prototype.updateGameState = function(data) {
  this.board.updateAvatars(data)
}

Game.prototype.draw = function() {
  this.interface.draw(this.board)
}

Game.prototype.createPlayer = function(name) {
  this.player = new Avatar(500, 500, name)
  this.board.addAvatar(this.player)
}

Game.prototype.sendMov = function(){
  this.channel.send_move(this.player.to_json())
}

Game.prototype.movePlayer = function(){

  if (this.interface.leftPressed){
  	this.player.move(-1,0)
  	this.sendMov()
  }
  if (this.interface.rightPressed){
  	this.player.move(1,0)
  	this.sendMov()
  }
  if (this.interface.upPressed){
  	this.player.move(0,-1)
  	this.sendMov()
  }
  if (this.interface.downPressed){
  	this.player.move(0,1)
  	this.sendMov()
  }
}
tick = function(game){
	game.movePlayer();
	game.draw();	
}

Game.prototype.start = function(){
	var game = this
	setInterval(function(){tick(game)}, 10)
}


