module.exports = function(config) {
  return function(globalConfig) {
    config.logLevel = globalConfig.LOG_INFO;
    globalConfig.set(config);
  };
};
