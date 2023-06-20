RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods

  config.prepend_before :each do
    FactoryBot.reload
  end
end
