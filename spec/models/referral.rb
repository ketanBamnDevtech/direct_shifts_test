require "rails_helper"

RSpec.describe Referral do

  describe 'associations' do
    it { is_expected.to belong_to(:user) }
  end

  describe 'validations' do
    it { should validate_presence_of(:email) }
  end
end
