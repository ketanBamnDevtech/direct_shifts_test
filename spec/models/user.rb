require "rails_helper"

RSpec.describe User do

  describe 'associations' do
    it { is_expected.to have_many(:referrals) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password) }
  end
end
