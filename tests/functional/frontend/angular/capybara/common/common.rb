def create_symlink key
  command = "ln -s ../../../../../../vendors src/frontend/angular/#{key}/"
  Process.spawn(command, out: '/dev/null', err: '/dev/null')
end

def kill_process_on_port_4000(pid)
  if !pid
    pid = `fuser -n tcp 4000 2> /dev/null`
  end
  command = "kill #{pid}"
  Process.spawn(command, out: '/dev/null', err: '/dev/null')
end

def run_server key
  command = "node_modules/http-server/bin/http-server src/frontend/angular/#{key}/ -p 4000 -s"
  pid = Process.spawn(command, out: '/dev/null', err: '/dev/null')
  pid
end

def setup_capybara
  Capybara.register_driver :chrome do |app|
    Capybara::Selenium::Driver.new(app, browser: :chrome, switches: %w{--test-type})
  end

  Capybara.configure do |c|
    c.javascript_driver = :chrome
    c.default_driver = :chrome
  end

  window = Capybara.current_session.driver.browser.manage.window
  window.maximize
end
