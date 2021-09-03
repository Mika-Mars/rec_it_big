class VoiceRecord < ApplicationRecord
  belongs_to :project
  has_one_attached :voice, dependent: :destroy

  def rank
    project_records = self.project.voice_records.order(created_at: :asc)
    project_records.index { |vr| vr.id == self.id } + 1
  end
end
