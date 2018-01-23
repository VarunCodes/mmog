function Game(board = new Board(), myinterface = new Interface()) {
  this.board = board
  this.interface = myinterface
  this.interface.addKeyHandlers()
  this.player;
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

Game.prototype.movePlayer = function(){



  if (this.interface.leftPressed){
  	this.player.move(-1,0)
  }
  if (this.interface.rightPressed){
  	this.player.move(1,0)
  }
  if (this.interface.upPressed){
  	this.player.move(0,-1)
  }
  if (this.interface.downPressed){
  	this.player.move(0,1)
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


