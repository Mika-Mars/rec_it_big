class Project < ApplicationRecord
  belongs_to :user
  has_many :voice_records

  validates :title, presence: true
end
