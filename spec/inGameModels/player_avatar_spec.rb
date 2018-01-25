describe PlayerAvatar do
	subject {PlayerAvatar.new({})}
  describe '#check_against' do
  	it 'checks whether the positions given are within 10px of the x and y value of the playeravatar' do
  	  subject.move(1,1)
  	  expect(subject.check_against(2,2)).to eq true
  	end
  end
end