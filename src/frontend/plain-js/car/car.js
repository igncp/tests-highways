(function() {
  window.plainJS = window.plainJS || {};
  window.plainJS.Car = {};

  var Car = function() {
    var _age = 0,
      _brand = 'Ford';

    this.initialize = function(brand, age) {
      _brand = brand || _brand;
      _age = age || _age;
    };

    if (arguments.length) {
      this.initialize();
    }

    this.getBrand = function() {
      return _brand;
    };

    this.setBrand = function(brand) {
      _brand = brand;
      return this;
    };

    this.addBirthday = function() {
      _age++;
    };

    this.toString = function() {
      return 'The brand is ' + this.getBrand() + ' and it\'s ' + _age + ' years old.';
    };
  };

  window.plainJS.Car = Car;
}).call(this);
