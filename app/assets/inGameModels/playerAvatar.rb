class PlayerAvatar
  attr_accessor :params
  def initialize mystuff
  	@params = mystuff
  end

  def move(x,y)
  	@params[xPos] += x
  	@params[yPos] += y
  end

  def check_against x,y
  	return Math.abs(@params[xpos] - x) < 10 && Math.abs(@params[ypos] - y) < 10
  end
end