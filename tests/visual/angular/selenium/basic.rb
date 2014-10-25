require_relative 'common/common.rb'

start_test
create_symlink 'basic'
pid = run_server 'basic'

$d = Selenium::WebDriver.for :chrome, switches: %w{--test-type}
$d.manage.window.maximize
$d.navigate.to 'http://localhost:4000'

sleep 1
$d.find_element(id: 'show-frame').click

sleep 5

$d.quit

kill_process_on_4000 pid