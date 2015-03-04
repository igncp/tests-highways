var relSource = 'src/frontend/sencha-extjs/with-requires/with-requires.js';

var defaultConfFactory = require('../default.karma.conf'),
  config = defaultConfFactory({
    relSource: relSource
  }),
  handleKarmaConfig = require('../handle.karma.config');

config.files.unshift('requests-handler.js');
module.exports = handleKarmaConfig(config);
