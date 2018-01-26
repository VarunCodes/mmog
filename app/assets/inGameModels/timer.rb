class Timer

  def initialize(&block)
  	@block = block
  end

  def start (time)
  	Thread.new{
	  loop do
        p 'in loop'
  	    sleep time
        p 'slept'
  	    @block.call
	  end
 	}
  end
end