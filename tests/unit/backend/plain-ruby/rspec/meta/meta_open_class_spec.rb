require_relative 'meta_common'
require_relative(MetaCommon.root + \
  'src/backend/plain-ruby/meta/meta_open_class')

describe Foo do
  it do
    foo = Foo.new
    expect(foo).to respond_to :a
    expect(foo).to respond_to :b
    expect(foo).not_to respond_to :c
  end

  it 'is class, with the class attribute of Class' do
    expect(Foo.class).to be_kind_of(Class)
  end

  it 'has a `constant`, which can be changed' do
    expect(Foo::CO).to be_truthy
    expect(Foo.constants).to include(:CO)
    warn_level = $VERBOSE # Hide warning of redifining a constant in tests
    $VERBOSE = nil
    expect { Foo::CO = 'Bar' }.not_to raise_exception
    $VERBOSE = warn_level
  end

  it 'needs that constants have the first letter uppercased when defined' do
    expect { class Foo; Xx = 'a'; end; Foo::Xx }.not_to raise_exception
    expect { class Foo; xx = 'a'; end; Foo::xx }.to raise_exception
  end
end