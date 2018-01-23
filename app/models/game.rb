class Game < ApplicationRecord
  belongs_to :user
  after_create_commit { GameBroadcastJob.perform_later(self) }
end
