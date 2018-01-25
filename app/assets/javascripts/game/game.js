function Game(channel,board, myinterface) {
  board = board || new Board(1200,600)
  myinterface = myinterface || new Interface()
  this.board = board
  this.interface = myinterface
  this.interface.addKeyHandlers()
  this.channel = channel;
  this.speed = 2

}

Game.prototype.updateGameState = function(data) {
  state = JSON.parse(data)
  avatars = []
  for(i = 0; i< state.length; i++) {
  	avatars.push(new Avatar(
  		state[i]['xPos'],
  		state[i]['yPos'],
  		state[i]['name'],
  		state[i]['id'], 40,
  		state[i]['colour'] ))
  }
  this.board.updateAvatars(avatars)
  this.board.addAvatar(this.board.player)
}

Game.prototype.draw = function() {
  this.interface.draw(this.board)
}

Game.prototype.createPlayer = function(avatar) {
  this.board.player = avatar
  this.board.addAvatar(this.board.player)
}

Game.prototype.sendMov = function(){
  this.channel.send_move(this.board.player.to_json())
}

Game.prototype.movePlayer = function(){

  if (this.interface.leftPressed){
  	this.board.move(-this.speed,0)
  	this.sendMov()
  }
  if (this.interface.rightPressed){
  	this.board.move(this.speed,0)
  	this.sendMov()
  }
  if (this.interface.upPressed){
  	this.board.move(0,-this.speed)
  	this.sendMov()
  }
  if (this.interface.downPressed){
  	this.board.move(0,this.speed)
  	this.sendMov()
  }
}
tick = function(game){
	game.movePlayer();
	game.draw();
}

Game.prototype.start = function(){
	var game = this
	setInterval(function(){tick(game)}, 20)
}
