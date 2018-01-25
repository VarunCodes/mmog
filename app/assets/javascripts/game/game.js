function Game(channel,board = new Board(1200,600), myinterface = new Interface()) {
  this.board = board
  this.interface = myinterface
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

Game.prototype.draw = function() {
  this.interface.draw(this.board)
}

Game.prototype.createPlayer = function(avatar) {
  this.board.player = avatar
  this.board.addAvatar(this.board.player)
}

Game.prototype.sendPosition = function(){
  this.channel.send_move(this.board.player.to_json())
}

Game.prototype.sendMove = function(keyCode, change) {
  var move = {}
  move[keyCode] = change
  move['avatarID'] = this.board.player.id
  if(this.isNotDuplicateMove(keyCode, change)) {
    this.channel.send_move(JSON.stringify(move))
    console.log(move)
    game.previousMove = move
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

  if (this.interface.leftPressed){
  	this.board.move(-this.speed,0)
  	//this.sendPosition()
  }
  if (this.interface.rightPressed){
  	this.board.move(this.speed,0)
  	//this.sendPosition()
  }
  if (this.interface.upPressed){
  	this.board.move(0,-this.speed)
  	//this.sendPosition()
  }
  if (this.interface.downPressed){
  	this.board.move(0,this.speed)
  	//this.sendPosition()
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


Game.prototype.addKeyHandlers = function(myinterface) {
  setupKeysHandlers(myinterface)
}

setupKeysHandlers = function(myinterface) {
  setEventHandler(myinterface, 'keyup', false)
  setEventHandler(myinterface, 'keydown', true)
}

setEventHandler = function(myinterface, keyEvent, change) {
  document.addEventListener(keyEvent, function() {
    var keyCode = determineKeyPress(myinterface, change);
    game.sendMove(keyCode.toString(), change)
  })
}

determineKeyPress = function(myinterface, change, keyCode) {
  if(event.keyCode == 37) {
    myinterface.leftPressed = change
    return event.keyCode
  } else if(event.keyCode == 38) {
    myinterface.upPressed = change
    return event.keyCode
  } else if(event.keyCode == 39) {
    myinterface.rightPressed = change
    return event.keyCode
  } else if(event.keyCode == 40) {
    myinterface.downPressed = change
    return event.keyCode
  }
}
