(function() {
  window.plainJS = window.plainJS || {};
  window.plainJS.simple = {};

  var fs = window.plainJS.simple; // fs: Functions

  fs.sum = function(a, b) {
    return a + b;
  };

  fs.constant = 2;
  
  fs.sumWithConstant = function(a,b) {
    return a + b + this.constant;
  };

}).call(this);