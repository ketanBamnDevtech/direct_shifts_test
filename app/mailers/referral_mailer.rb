class ReferralMailer < ApplicationMailer

  def send_email
    @referral = params[:referral]
    @signup_url = root_url + "signup"
    mail(to: @referral.email, subject: "You've been referred!")
  end
end
