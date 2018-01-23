function Board() {
  this.avatars = []
}

Board.prototype.addAvatar = function(avatar) {
  this.avatars.push(avatar)
}
Board.prototype.updateAvatars = function(avatars){
  this.avatars = avatars
}
