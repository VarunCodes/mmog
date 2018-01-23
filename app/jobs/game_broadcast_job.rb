class GameBroadcastJob < ApplicationJob
  queue_as :default

  def perform(move)
    ActionCable.server.broadcast "game_channel",
                                  move: render_move(move)
  end

  private

  def render_move(move)
    GameController.render :json => move
  end
end
