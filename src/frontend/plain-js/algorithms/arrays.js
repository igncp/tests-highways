(function(glob) {
  glob.A = glob.A || {};
  glob.A.arrays = {};
  var arr = glob.A.arrays;

  arr.deepCopy = function (a) {
    var newArr = [];
    for (var i = 0; i < a.length; ++i) {
      newArr.push(a[i]);
    }
    return newArr;
  };

})(window);
