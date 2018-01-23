jQuery(document).on('turbolinks:load', function() {
  console.log('called')
  var App_game_channel;
  App_game_channel = App.cable.subscriptions.create({
    channel: "GameChannel"
  }, {
      connected: function() {},
      disconnected: function() {},
      received: function(data) {
        console.log(data)
      },
    send_move: function(move) {
        return this.perform('send_move', {
          move: move,
      });
    }
  });

  (function(){
    var game = new Game(App_game_channel);
    game.createPlayer(playerAvatar);
    game.draw();
    game.start();
  })();

})