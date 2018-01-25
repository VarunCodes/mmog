function Game(channel,board = new Board(1200,600), myinterface) {
  this.board = board
  this.interface = myinterface || new Interface(this)
  this.channel = channel;
  this.speed = 2
  this.previousMove = null
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

Game.prototype.getMove = function(data) {
  console.log('Move received')
  console.log(data)
  var move = JSON.parse(data)
  var avatarToMove = this.board.avatars.find(function(avatar) {
    return avatar.id == move['avatarID']
  })
  var keyCode = Object.keys(move)[0]
  determineKeyPress(avatarToMove, move[keyCode], keyCode)
}

Game.prototype.draw = function() {
  this.interface.draw(this.board)
}

Game.prototype.createPlayer = function(avatar) {
  this.board.player = avatar
  this.board.addAvatar(this.board.player)
}

Game.prototype.sendPosition = function(){
  this.channel.send_position(this.board.player.to_json())
}

Game.prototype.sendMove = function(keyCode, change) {
  var move = {}
  move[keyCode] = change
  move['avatarID'] = this.board.player.id
  if(this.isNotDuplicateMove(keyCode, change)) {
    this.channel.send_move(JSON.stringify(move))
    game.previousMove = move
    console.log(move)
  }
}

Game.prototype.isNotDuplicateMove = function(keyCode, change) {
  if(this.previousMove === null) { return true }
  var prevKeyCode = Object.keys(this.previousMove)[0]
  var prevChange = this.previousMove[prevKeyCode]
  if((keyCode === prevKeyCode)&&(change === prevChange)) {
    return false
  } else {
    return true
  }
}

Game.prototype.movePlayer = function(player){

  if (player.leftPressed){
  	this.board.move(-this.speed,0)
  	//this.sendPosition()
  }
  if (player.rightPressed){
  	this.board.move(this.speed,0)
  	//this.sendPosition()
  }
  if (player.upPressed){
  	this.board.move(0,-this.speed)
  	//this.sendPosition()
  }
  if (player.downPressed){
  	this.board.move(0,this.speed)
  	//this.sendPosition()
  }
}

tick = function(game){
	game.movePlayer(game.board.player);
	game.draw();
}

Game.prototype.start = function(){
	var game = this
	setInterval(function(){tick(game)}, 20)
}

determineKeyPress = function(myPlayer, change, keyCode) {
  var keyCode = keyCode || event.keyCode
  if(keyCode == 37) {
    myPlayer.leftPressed = change
    return keyCode
  } else if(keyCode == 38) {
    myPlayer.upPressed = change
    return keyCode
  } else if(keyCode == 39) {
    myPlayer.rightPressed = change
    return keyCode
  } else if(keyCode == 40) {
    myPlayer.downPressed = change
    return keyCode
  }
}
