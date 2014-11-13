var facade = (function() {
  var _private = {
    i: 5,
    get: function() {
      return this.i;
    },
    set: function(val) {
      this.i = val;
      return val;
    },
    run: function() {
      return 'running';
    },
    jump: function() {
      return 'jumping';
    }
  };

  return function(args) {
    args = args || {};
    if (args.jump) {
      return _private.jump();
    } else if (args.write) {
      return _private.set(args.val);
    } else if (args.read) {
      return _private.get();
    }
  };
}());

module.exports = {
  facade: facade
};
