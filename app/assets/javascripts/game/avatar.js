function Avatar(xPos, yPos, name, id, size, colour) {
  this.xPos = xPos
  this.yPos = yPos
  this.name = name
  this.size = size
  this.id = id

  this.colour = colour || randomColour()

  this.leftPressed = false
  this.upPressed = false
  this.rightPressed = false
  this.downPressed = false

}

Avatar.prototype.move = function(xCoord, yCoord) {
  this.xPos += xCoord
  this.yPos += yCoord
}

Avatar.prototype.to_json = function(){
	return JSON.stringify(this)
}

randomColour = function(){
  randomnum = Math.floor((Math.random()* 5))
  colours = ["yellow","red","blue","green","orange"]
  return colours[randomnum]
}
