guard :rspec, cmd: 'bundle exec rspec' do
  watch(%r{^tests/unit/backend/plain-ruby/rspec/(.+)\.rb$})     { |m| "tests/unit/backend/plain-ruby/rspec/" }
  watch(%r{^src/backend/plain-ruby/(.+)\.rb$})     { |m| "tests/unit/backend/plain-ruby/rspec/" }
end
