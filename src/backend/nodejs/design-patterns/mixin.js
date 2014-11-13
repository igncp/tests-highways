var Aircraft = function(settings) {
  settings = settings || {};
  this.type = settings.type || "jet plane";
  this.color = settings.color || "silver";
};

var Mixin = function() {};

Mixin.prototype = {
  turnOn: function() {
    return '...brrrRR';
  },
  turnOff: function() {
    return 'fiuh....';
  },
};

// This function is similar to _.extend
function augment(receivingClass, givingClass) {
  if (arguments.length > 2) {
    for (var i = 2, len = arguments.length; i < len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  } else {
    for (var methodName in givingClass.prototype) {
      if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
}

module.exports = {
  Aircraft: Aircraft,
  Mixin: Mixin,
  augment: augment
};
