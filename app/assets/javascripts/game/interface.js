function Interface(game) {
  this.game = game
};

Interface.prototype.draw = function(board) {
  var canvas = document.getElementById('game-board-canvas')
  var context = canvas.getContext("2d")
  context.font = '30px Ariel'
  context.clearRect(0, 0, canvas.width, canvas.height)
  for(var i=0;i<board.avatars.length;i++) {
    var avatar = board.avatars[i]
    context.fillStyle = avatar.colour;
    context.beginPath();
    context.arc(avatar.xPos, avatar.yPos, avatar.size, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    context.fillStyle = 'black'
    context.fillText(avatar.name,avatar.xPos - 20, avatar.yPos)
  }
}

Interface.prototype.addKeyHandlers = function() {
  this.setupKeysHandlers()
}

Interface.prototype.setupKeysHandlers = function(){
  this.setEventHandler('keyup', false)
  this.setEventHandler('keydown', true)
}

Interface.prototype.setEventHandler = function(keyEvent, change) {
  document.addEventListener(keyEvent, function() {
    var keyCode = determineKeyPress(game.board.player, change);
    game.sendMove(keyCode.toString(), change)
  })
}
