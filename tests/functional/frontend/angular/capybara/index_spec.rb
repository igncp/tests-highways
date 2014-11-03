require 'capybara/rspec'
require_relative 'common/common.rb'

setup_capybara
pid = ''

describe "Basic angular", type: :feature do
  before :all do
    kill_process_on_port_4000 false
    create_symlink 'basic'
    pid = run_server 'basic'
  end

  it "renders the page content" do
    visit "http://localhost:4000"
    expect(page).to have_content('AngularJS')
  end

  after :all do
    kill_process_on_port_4000 pid
  end
end
