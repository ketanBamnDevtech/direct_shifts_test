FactoryBot.define do
  factory :user, class: User do
    name { "test" }
    email { "test@yopmail.com" }
    password { "12345678" }
  end
end
