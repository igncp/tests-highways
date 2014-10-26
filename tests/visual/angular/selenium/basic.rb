require_relative 'common/common.rb'

start_test
create_symlink 'basic'
pid = run_server 'basic'

start_driver

$d.navigate.to 'http://localhost:4000'

sleep 1
$d.find_element(id: 'show-frame').click

quit_after_waiting 5

kill_process_on_4000 pid