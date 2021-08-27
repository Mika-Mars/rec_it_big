class Project < ApplicationRecord
  belongs_to :user
  has_many :voice_records, dependent: :destroy
  has_one :note, dependent: :destroy
  has_one_attached :song, dependent: :destroy

  validates :title, presence: true
end
