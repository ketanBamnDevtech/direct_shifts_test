FactoryBot.define do
  factory :referral, class: Referral do
    email { "test@yopmail.com" }
    user_id { 1 }
  end
end
