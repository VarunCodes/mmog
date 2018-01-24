function Board(xSize, ySize) {
  this.avatars = []
  this.xSize = xSize
  this.ySize = ySize
}

Board.prototype.addAvatar = function(avatar) {
  this.avatars.push(avatar)
  avatar.board = self
}
Board.prototype.updateAvatars = function(avatars){
  this.avatars = avatars
}
