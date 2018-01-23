var mockInterface = {
  draw: function(arg){this.drawn = true },
  addKeyHandlers: function(){},
  drawn: false
}
var mockBoard = {
  updateAvatars: function(arg){this.added = true},
  added: false
}
mygame = new Game(mockBoard,mockInterface)
describe("game#draw",[
  it("calls the interface.draw method",[
    mygame.draw(),
    expect(mockInterface.drawn).toEqual(true)
  ])
])
describe("game#updategamestate",[
  it("calls update avatars on the board",[
    mygame.updateGameState('arg'),
    expect(mockBoard.added).toEqual(true)
  ])
])
