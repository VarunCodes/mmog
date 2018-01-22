require 'rails_helper'

RSpec.describe "messages/new", type: :view do
  before(:each) do
    assign(:message, Message.new(
      :body => "MyText",
      :user => nil,
      :chat_room => nil
    ))
  end

  it "renders new message form" do
    render

    assert_select "form[action=?][method=?]", messages_path, "post" do

      assert_select "textarea[name=?]", "message[body]"

      assert_select "input[name=?]", "message[user_id]"

      assert_select "input[name=?]", "message[chat_room_id]"
    end
  end
end
