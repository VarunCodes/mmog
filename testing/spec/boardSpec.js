var myboard = new Board()
describe("Board#addAvatar",[
  it("recieves an avatar and adds it to the avatar state",[
    myboard.addAvatar("an avatar"),
    expect(myboard.avatars).toContain("an avatar")
  ])
])
describe("Board#updateAvatars",[
  it("recieves an array of avatars and sets the board state of avatars to be equal to this",[
    myboard.updateAvatars(["this","that"]),
    expect(myboard.avatars).toContain("this"),
    expect(myboard.avatars).toContain("that"),
    dont(expect(myboard.avatars).toContain("an avatar"))
  ])
])
