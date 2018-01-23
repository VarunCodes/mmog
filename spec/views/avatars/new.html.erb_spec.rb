require 'rails_helper'

RSpec.describe "avatars/new", type: :view do
  before(:each) do
    assign(:avatar, Avatar.new(
      :user => nil,
      :xPos => 1,
      :yPos => 1,
      :name => "MyString"
    ))
  end

  it "renders new avatar form" do
    render

    assert_select "form[action=?][method=?]", avatars_path, "post" do

      assert_select "input[name=?]", "avatar[user_id]"

      assert_select "input[name=?]", "avatar[xPos]"

      assert_select "input[name=?]", "avatar[yPos]"

      assert_select "input[name=?]", "avatar[name]"
    end
  end
end
