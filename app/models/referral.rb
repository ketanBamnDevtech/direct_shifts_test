class Referral < ApplicationRecord
  self.per_page = 10

  belongs_to :user

  validates :email, presence: true
end
