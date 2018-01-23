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
