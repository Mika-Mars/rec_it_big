class Project < ApplicationRecord
  belongs_to :user
  has_many :voice_records
  has_one :note
  has_one_attached :song

  validates :title, presence: true
end
