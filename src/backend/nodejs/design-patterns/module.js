var myNamespace = (function() {
  var myPrivateVar, myPrivateMethod;
  myPrivateVar = 0;
  myPrivateMethod = function(foo) {
    console.log(foo);
  };

  return {
    myPublicVar: "foo",
    myPublicFunction: function(bar) {
      myPrivateVar++;
      myPrivateMethod(bar);
    }
  };
})();

var cart = (function() {
  var items = [];

  function doSomethingPrivate() {}

  function doSomethingElsePrivate() {}

  return {
    addItem: function(values) {
      items.push(values);
      return this;
    },
    getItemsCount: function() {
      return items.length;
    },
    doSomething: doSomethingPrivate,
    getTotal: function() {
      var q = this.getItemCount(),
        p = 0;
      while (q--) {
        p += items[q].price;
      }
      return p;
    }
  };
})();

var revealingModule = (function() {
  var privateVar = "Addy Osmani",
    aliasedVar = "Hey there!";

  function privateFunction() {
    console.log("Name:" + privateVar);
  }

  function aliasedSetName(strName) {
    privateVar = strName;
  }

  function aliasedGetName() {
    privateFunction();
  }
  return {
    setName: aliasedSetName,
    greeting: aliasedVar,
    getName: aliasedGetName
  };
})();

module.exports = {
  myNamespace: myNamespace,
  cart: cart,
  revealingModule: revealingModule
};