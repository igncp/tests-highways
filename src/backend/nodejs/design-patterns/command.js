var badSkater = {
  grind: function(barType) {
    return "ouch! a " + barType + " bar!";
  },
  jump: function(height) {
    return "ugh! I just fell down " + height;
  }
};

badSkater.execute = function(name) {
  return badSkater[name] && badSkater[name].apply(badSkater, [].slice.call(arguments, 1));
};

module.exports = {
  badSkater: badSkater
};