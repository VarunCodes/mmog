require 'libv8'
require 'therubyracer'

cxt = V8::Context.new
filepath = File.expand_path(File.dirname(__FILE__))

cxt.load("#{filepath}/app/assets/javascripts/game/avatar.js")
cxt.load("#{filepath}/app/assets/javascripts/game/board.js")
cxt.load("#{filepath}/app/assets/javascripts/game/interface.js")
cxt.load("#{filepath}/app/assets/javascripts/game/game.js")

cxt.eval("game = new Game('mychannel')")

p cxt[:game]
