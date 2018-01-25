class PlayerAvatar
  attr_accessor :params
  def initialize mystuff
  	@params = mystuff
  	@params[:xPos] ||= 0
  	@params[:yPos] ||= 0
  end

  def move(x,y)
  	@params[:xPos] += x
  	@params[:yPos] += y
  end

  def check_against x,y
  	return Math.abs(@params[:xPos] - x) < 10 && Math.abs(@params[:yPos] - y) < 10
  end
end