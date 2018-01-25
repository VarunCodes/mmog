class Timer

  def initialize(&block)
  	@block = block
  end

  def start (time)
  	Thread.new{
	  loop do
  	    sleep time
  	    @block.call
	  end
 	}
  end
end