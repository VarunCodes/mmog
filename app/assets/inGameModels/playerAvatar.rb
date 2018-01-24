class PlayerAvatar
  attr_accessor :params
  def initialize mystuff
  	@params = mystuff
  end

  def move(x,y)
  	@params[xPos] += x
  	@params[yPos] += y
  end
end