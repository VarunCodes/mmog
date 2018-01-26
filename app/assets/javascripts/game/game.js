
function Game(channel, board, myinterface) {
  this.board = board || new Board(1200,600)
  this.interface = myinterface || new Interface()
  this.channel = channel;
  this.speed = 2
  this.previousMove = null
}


Game.prototype.getUpdates = function(data) {
  parsedData = JSON.parse(data)
  if(parsedData instanceof Array) {
    this.getGameState(parsedData)
  } else {
    this.getMove(parsedData)
  }
}

Game.prototype.getGameState = function(data) {
  avatars = []
  for(i = 0; i < data.length; i++) {
  	avatars.push(new Avatar(
  		data[i]['xPos'],
  		data[i]['yPos'],
  		data[i]['name'],
  		data[i]['id'], 40,
  		data[i]['colour'] ))
  }
  this.board.updateAvatars(avatars)
  console.log(avatars)
  console.log(this.board.avatars)
  this.board.addAvatar(this.board.player)
}

Game.prototype.getMove = function(data) {
  var avatarToMove = this.board.avatars.find(function(avatar) {
    return avatar.id == data['avatarID']
  })
  var keyCode = Object.keys(data)[0]
  console.log(keyCode)
  console.log(data)
  determineKeyPress(avatarToMove, data[keyCode], keyCode)
}

Game.prototype.draw = function() {
  this.interface.draw(this.board)
}

Game.prototype.createPlayer = function(avatar) {
  this.board.player = avatar
  this.board.addAvatar(this.board.player)
  this.sendPosition(this.board.player)
}

Game.prototype.sendPosition = function(player){
  this.channel.send_position(player.to_json())
}

Game.prototype.sendMove = function(keyCode, change) {
  console.log(game.board.player)
  console.log(game.board.avatars)
  var move = {}
  move[keyCode] = change
  move['avatarID'] = this.board.player.id
  if(this.isNotDuplicateMove(keyCode, change)) {
    this.channel.send_move(JSON.stringify(move))
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


  if (player.leftPressed){
  	this.board.move(-this.speed,0,player)
  	//this.sendMov()

  }
  if (player.rightPressed){
  	this.board.move(this.speed,0,player)
  	//this.sendMov()
  }
  if (player.upPressed){
  	this.board.move(0,-this.speed,player)
  	//this.sendMov()
  }
  if (player.downPressed){
  	this.board.move(0,this.speed,player)
  	//this.sendMov()
  }
}
tick = function(game){
  for(var i=0;i<game.board.avatars.length;i++) {
	  game.movePlayer(game.board.avatars[i]);
  }
  for(var i=0;i<game.board.avatars.length;i++) {
    //game.sendPosition(game.board.avatars[i]);
  }
	game.draw();
}
// 
// updateTick = function(game) {
//
// }

Game.prototype.start = function(){
	var game = this
  // setInterval(function(){updateTick(game), 1000})
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
