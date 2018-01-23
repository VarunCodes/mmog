function Interface() {
  this.leftPressed = false
  this.upPressed = false
  this.rightPressed = false
  this.downPressed = false
};

Interface.prototype.draw = function(board) {
  var canvas = document.getElementById('game-board-canvas')
  var context = canvas.getContext("2d")
  for(var i=0;i<board.avatars.length;i++) {
    var avatar = board.avatars[i]
    context.fillStyle = avatar.colour;
    context.beginPath();
    context.arc(avatar.xPos, avatar.yPos, 40, 0, 2*Math.PI);
    context.closePath();
    context.fill();
  }
}

Interface.prototype.addKeyHandlers = function() {
  document.addEventListener('keydown', function() {
    if(event.keyCode == 37) {
      this.leftPressed = true
      console.log('left down')
    } else if(event.keyCode == 38) {
      this.upPressed = true
      console.log('up down')
    } else if(event.keyCode == 39) {
      this.rightPressed = true
    } else if(event.keyCode == 40) {
      this.downPressed = true
    }
  })

  document.addEventListener('keyup', function() {
    if(event.keyCode == 37) {
      this.leftPressed = false
      console.log('left up')
    } else if(event.keyCode == 38) {
      this.upPressed = false
      console.log('up up')
    } else if(event.keyCode == 39) {
      this.rightPressed = false
    } else if(event.keyCode == 40) {
      this.downPressed = false
    }
  })
}
