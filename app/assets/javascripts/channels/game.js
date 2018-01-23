
App_global_chat = App.cable.subscriptions.create({
  channel: "ChatRoomsChannel",
  chat_room_id: moves.data('chat-room-id')
}, {
  connected: function() {},
  disconnected: function() {},
  received: function(data) {
    // return moves.append(data['move']);
  },
send_move: function(move, chat_room_id) {
    return this.perform('send_move', {
      move: move,
      chat_room_id: chat_room_id
    });
  }
});
