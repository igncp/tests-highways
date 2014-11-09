var definingObjectWayOne = function(newObj) {
  var defineProp = function(obj, key, value) {
    var config = {
      value: value,
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(obj, key, config);
  };

  defineProp(newObj, "car", "Delorean");
  defineProp(newObj, "dateOfBirth", "1981");
  defineProp(newObj, "hasBeard", false);
};

var definingObjectWayTwo = function(newObj) {
  Object.defineProperties(newObj, {
    someKey: {
      value: "Hello World",
      writable: true,
      enumerable: true,
      configurable: false
    },
    anotherKey: {
      value: "Foo bar",
      writable: false,
      enumerable: true,
      configurable: false
    }
  });
};

var inheritFromObject = function() {
  var animal = {
    isPlant: false,
    live: function() {
      return 'yay';
    }
  };

  return Object.create(animal);
};

var prototypedConstructor = function() {
  function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  }
  
  Car.prototype.toString = function() {
    return this.model + " has done " + this.miles + " miles";
  };
  
  return Car;
};

module.exports = {
  definingObjectWayOne: definingObjectWayOne,
  definingObjectWayTwo: definingObjectWayTwo,
  inheritFromObject: inheritFromObject,
  prototypedConstructor: prototypedConstructor
};
