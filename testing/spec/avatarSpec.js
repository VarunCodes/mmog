var myAvatar = new Avatar(500,500,'name')

describe("Avatar#move",[
  it("can be moved (change its positional coordinates)",[
    myAvatar.move(1,0),
    expect(myAvatar.xPos).toEqual(501)
  ])
])
