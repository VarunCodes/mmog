function Board(xSize, ySize) {
  this.avatars = []
  this.xSize = xSize
  this.ySize = ySize
}

Board.prototype.addAvatar = function(avatar) {
  this.avatars.push(avatar)
}
Board.prototype.updateAvatars = function(avatars){
  this.avatars = avatars
}
Board.prototype.move = function(x,y, player = this.player){
	if ((player.xPos + x - player.size > 0) &&
	 (player.xPos + x + player.size < this.xSize) &&
	 (player.yPos + y - player.size > 0) &&
	 (player.yPos + y + player.size < this.ySize)) {
		player.move(x,y)}
}
