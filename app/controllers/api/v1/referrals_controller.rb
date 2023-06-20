class Api::V1::ReferralsController < ApplicationController

  def user_referrals
    @referrals = current_user.referrals
    render json: {referrals: @referrals}
  end

  def create
    @referral = current_user.referrals.create(referral_params)
    if @referral.save
      # send referral email
      send_referral_email
      render json: {referral: @referral}
    else
      render json: { errors: @referral.errors }
    end
  end

  private

  def referral_params
    params.require(:referral).permit(:email)
  end

  def send_referral_email
    ReferralMailer.with(referral: @referral).send_email.deliver_now
  end
end
