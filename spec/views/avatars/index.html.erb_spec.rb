require 'rails_helper'

RSpec.describe "avatars/index", type: :view do
  before(:each) do
    assign(:avatars, [
      Avatar.create!(
        :user => nil,
        :xPos => 2,
        :yPos => 3,
        :name => "Name"
      ),
      Avatar.create!(
        :user => nil,
        :xPos => 2,
        :yPos => 3,
        :name => "Name"
      )
    ])
  end

  it "renders a list of avatars" do
    render
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
    assert_select "tr>td", :text => "Name".to_s, :count => 2
  end
end
