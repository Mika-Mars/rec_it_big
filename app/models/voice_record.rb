class VoiceRecord < ApplicationRecord
  belongs_to :project
  has_one_attached :voice, dependent: :destroy
end
