var relSource = 'src/frontend/sencha-extjs/data-view/data-view.js';

var defaultConfFactory = require('../default.karma.conf'),
  config = defaultConfFactory({
    relSource: relSource
  }),
  handleKarmaConfig = require('../handle.karma.config');

config.proxies = {
  '/': 'http://localhost:1841/data-view/'
};

config.singleRun = false;

module.exports = handleKarmaConfig(config);
