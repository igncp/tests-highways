require_relative 'common/common.rb'

kill_process_on_port_4000 false
create_symlink 'basic'
pid = run_server 'basic'

start_driver

$d.navigate.to 'http://localhost:4000'

sleep 1
$d.find_element(id: 'show-frame').click

sleep 1
$d.find_element(id: 'get-data').click

quit_after_waiting 2

kill_process_on_port_4000 pid