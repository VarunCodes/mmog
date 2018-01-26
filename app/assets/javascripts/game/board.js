function Board(xSize, ySize) {
  this.avatars = []
  this.viruses= []
  this.xSize = xSize
  this.ySize = ySize
}

Board.prototype.addAvatar = function(avatar) {
  this.avatars.push(avatar)
}
Board.prototype.updateAvatars = function(avatars){
  this.avatars = avatars
}

Board.prototype.addViruses = function() {
  var canvas = document.getElementById('game-board-canvas')
  for (var m = 0; m < 16; m++) {
    this.viruses.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: 2,
      vy: 2
    })
  }
}

Board.prototype.updateViruses = function() {
  var canvas = document.getElementById('game-board-canvas')
  for (var i = 0; i < this.viruses.length; i++) {
    var virus = this.viruses[i];
    var bounce = -1;
    virus.x += virus.vx;
    virus.y += virus.vy;

    if (virus.x > canvas.width) {
      virus.x = canvas.width;
      virus.vx *= bounce;
    } else if (virus.x < 0) {
      virus.x = 0;
      virus.vx *= bounce;
    }

    if (virus.y > canvas.height) {
      virus.y = canvas.height;
      virus.vy *= bounce;
    } else if (virus.y < 0) {
      virus.y = 0;
      virus.vy *= bounce;
    }
  }
};

Board.prototype.move = function(x,y){
	if ((this.player.xPos + x - this.player.size > 0) &&
	 (this.player.xPos + x + this.player.size < this.xSize) &&
	 (this.player.yPos + y - this.player.size > 0) &&
	 (this.player.yPos + y + this.player.size < this.ySize)) {
		this.player.move(x,y)}
}
