var simpleSingleton = (function() {
  var instance;

  function init() {
    function privateMethod() {
      console.log("I am private");
    }

    var privateVariable = "Im also private";

    var privateRandomNumber = Math.random();

    return {
      publicMethod: function() {
        console.log("The public can see me!");
      },
      publicProperty: "I am also public",
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

var notSingleton = (function() {
  var instance, counter = 0;

  function init() {
    var privateCounter = counter++;
    return {
      getCounter: function() {
        return privateCounter;
      }
    };
  }
  return {
    getInstance: function() {
      instance = init();
      return instance;
    }
  };
})();

var configurableSingleton = (function() {
  function Singleton(options) {
    options = options || {};
    this.name = "SingletonTester";
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }
  var instance;
  var _static = {
    name: "SingletonTester",
    getInstance: function(options) {
      if (instance === undefined) {
        instance = new Singleton(options);
      }
      return instance;
    },
    restore: function() {
      instance = undefined;
    }
  };
  return _static;
})();

module.exports = {
  simpleSingleton: simpleSingleton,
  notSingleton: notSingleton,
  configurableSingleton: configurableSingleton
};