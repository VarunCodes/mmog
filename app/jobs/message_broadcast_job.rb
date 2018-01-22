class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    p 'in broadcast'
    p render_message(message)
    ActionCable.server.broadcast "chat_room_#{message.chat_room_id}_channel",
                                  message: render_message(message)
  end

  private

  def render_message(message)
    MessagesController.render partial: "messages/message", locals: {message: message}
  end
end
