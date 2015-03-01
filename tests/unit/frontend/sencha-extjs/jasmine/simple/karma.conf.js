var relSource = 'src/frontend/sencha-extjs/simple/app.js';

var defaultConfFactory = require('../default.karma.conf'),
  config = defaultConfFactory({
    relSource: relSource
  }),
  handleKarmaConfig = require('../handle.karma.config');;

config.proxies = {
  '/simple-app': 'http://localhost:1841/simple/app'
};

module.exports = handleKarmaConfig(config);
