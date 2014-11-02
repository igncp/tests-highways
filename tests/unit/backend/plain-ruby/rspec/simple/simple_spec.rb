root = '../../../../../../'

require_relative(root + 'src/backend/plain-ruby/simple/simple')

describe 'sum method' do
  it 'returns the right values' do
    expect(sum(1,2)).to eq(3)
    expect(sum(0,0)).to eq(0)
    expect(sum(-1,-3)).to eq(-4)
  end
end