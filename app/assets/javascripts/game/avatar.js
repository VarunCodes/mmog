function Avatar(xPos, yPos, name) {
  this.xPos = xPos
  this.yPos = yPos
  this.colour = 'yellow'
  this.name = name
}

Avatar.prototype.move = function(xCoord, yCoord) {
  this.xPos += xCoord
  this.yPos += yCoord
}
