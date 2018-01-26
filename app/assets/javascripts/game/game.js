function Game(channel,board = new Board(1200,600), myinterface = new Interface()) {
  this.board = board
  this.interface = myinterface
  this.interface.addKeyHandlers()
  this.channel = channel;
  this.adjustment;
  this.leashLength = 7;
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
  this.applyCorrection(this)
}

Game.prototype.applyCorrection = function(game) {
  var serverPlayer = game.board.avatars.find(function(avatar) {
    return avatar.id == game.board.player.id;
  });
  if(serverPlayer) {
    var index = game.board.avatars.indexOf(serverPlayer)
    game.board.avatars.splice(index, 1)
    var player = game.board.player
    var xDiff = Math.abs(player.xPos - serverPlayer.xPos)
    var yDiff = Math.abs(player.yPos - serverPlayer.yPos)
    var diff = Math.sqrt((Math.pow(yDiff, 2)) + (Math.pow(xDiff, 2)))
    if(diff > game.leashLength) {
      game.adjustment = game.leashLength / diff
      player.speed = game.adjustment * player.speed
    } else {
      player.speed = 2
    }
  }
  console.log(game.board.player.speed)
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
  	this.board.move(-this.board.player.speed,0)
  	this.sendMov()
  }
  if (this.interface.rightPressed){
  	this.board.move(this.board.player.speed,0)
  	this.sendMov()
  }
  if (this.interface.upPressed){
  	this.board.move(0,-this.board.player.speed)
  	this.sendMov()
  }
  if (this.interface.downPressed){
  	this.board.move(0,this.board.player.speed)
  	this.sendMov()
  }
}
tick = function(game){
  game.board.updateViruses();
	game.movePlayer();
	game.draw();
}

Game.prototype.start = function(){
	var game = this
  game.board.addViruses();
	setInterval(function(){tick(game)}, 20)
}
