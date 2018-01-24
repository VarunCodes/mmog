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
Board.prototype.move = function(x,y){
	if ((this.player.xPos + x - this.player.size > 0) &&
	 (this.player.xPos + x + this.player.size < this.xSize) &&
	 (this.player.yPos + y - this.player.size > 0) && 
	 (this.player.yPos + y + this.player.size < this.ySize)) {
		this.player.move(x,y)}
}