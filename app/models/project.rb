class Project < ApplicationRecord
  belongs_to :user
  has_many :voice_records
  has_one :note

  validates :title, presence: true, uniqueness: true
end
