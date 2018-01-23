require 'rails_helper'

RSpec.describe "avatars/edit", type: :view do
  before(:each) do
    @avatar = assign(:avatar, Avatar.create!(
      :user => nil,
      :xPos => 1,
      :yPos => 1,
      :name => "MyString"
    ))
  end

  it "renders the edit avatar form" do
    render

    assert_select "form[action=?][method=?]", avatar_path(@avatar), "post" do

      assert_select "input[name=?]", "avatar[user_id]"

      assert_select "input[name=?]", "avatar[xPos]"

      assert_select "input[name=?]", "avatar[yPos]"

      assert_select "input[name=?]", "avatar[name]"
    end
  end
end
