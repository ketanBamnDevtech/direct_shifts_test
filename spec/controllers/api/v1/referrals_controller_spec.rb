require "rails_helper"

RSpec.describe Api::V1::ReferralsController, type: :controller do

  let!(:user) { create(:user) }

  let(:expected_response_keys) {
    ["id", "email", "user_id", "created_at", "updated_at"]
  }

  let(:referral_params) { {email: "testing@yopmail.com"} }

  before do
    sign_in user
  end

  describe "GET /api/v1/user_referrals" do
    let!(:referral) { create(:referral, user_id: user.id, email: "exmaple@yopmail.com")}

    context "when fetching user referrals" do
      subject! { get :user_referrals, format: :json }

      it { expect(response.status).to eq(200) }
      it { expect(JSON.parse(response.body)["referrals"].class).to eq(Array) }
      it { expect(JSON.parse(response.body)["referrals"].first.keys).to eq(expected_response_keys) }
    end
  end

  describe "POST /api/v1/referrals" do
    context "when fetching user referrals" do
      subject! { post :create, params: { referral: referral_params }, format: :json }

      it { expect(response.status).to eq(200) }
      it { expect(JSON.parse(response.body)["referral"]).not_to eq(nil) }
      it { expect(JSON.parse(response.body)["referral"].keys).to eq(expected_response_keys) }
    end
  end
end
