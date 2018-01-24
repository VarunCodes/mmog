function Avatar(xPos, yPos, name, id, size) {
  this.xPos = xPos
  this.yPos = yPos
  this.name = name
  this.size = size
  this.id = id
  this.colour = 'yellow'
}

Avatar.prototype.move = function(xCoord, yCoord) {
  this.xPos += xCoord
  this.yPos += yCoord
}

Avatar.prototype.to_json = function(){
	return JSON.stringify(this)
}
