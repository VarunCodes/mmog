function Avatar(xPos, yPos, name, id) {
  this.xPos = xPos
  this.yPos = yPos
  this.name = name
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
