"use strict";

$.simple = function (){
  var simple = function() {
    this.foo = 'bar';
  };

  simple.prototype.customSelector = function(el) {
    return $(el);
  };

  simple._privateFn = function() {
    console.log('I am private');
  };

  return new simple();
};