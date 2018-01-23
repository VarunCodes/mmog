describe("Array#sum",[
  it("adds a number of elements in an array",[
  	expect([1,2,3,4,5,7].sum()).toEqual(22)
  	])
  ])
describe("Array#remove",[
  it("removes the specified element from the array",[
  	array = [1,2,3,"unwanted",4,5],
  	array.remove("unwanted"),
  	dont(expect(array).toContain(["unwanted"]))
  	])
  ])