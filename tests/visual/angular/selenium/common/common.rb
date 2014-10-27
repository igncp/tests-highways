require 'selenium-webdriver'

def create_symlink key
  command = "ln -s ../../../../vendors src/frontend/angular/#{key}/"
  Process.spawn(command, out: '/dev/null', err: '/dev/null')
end

def kill_process_on_port_4000(pid)
  if !pid
    pid = `fuser -n tcp 4000 2> /dev/null`
  end
  command = "kill #{pid}"
  Process.spawn(command, out: '/dev/null', err: '/dev/null')
end

def quit_after_waiting time
  sleep time
  $d.quit
end

def run_server key
  command = "node_modules/http-server/bin/http-server src/frontend/angular/#{key}/ -p 4000 -s"
  pid = Process.spawn(command, out: '/dev/null', err: '/dev/null')
  pid
end

def script command, var = false
  if var
    $d.execute_script command, var
  else
    $d.execute_script command
  end
end

def start_driver
  $d = Selenium::WebDriver.for :chrome, switches: %w{--test-type}
  $d.manage.window.maximize
end