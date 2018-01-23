require 'rails_helper'

RSpec.describe "avatars/show", type: :view do
  before(:each) do
    @avatar = assign(:avatar, Avatar.create!(
      :user => nil,
      :xPos => 2,
      :yPos => 3,
      :name => "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/Name/)
  end
end
