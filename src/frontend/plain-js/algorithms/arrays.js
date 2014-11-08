(function(glob) {
  glob.A = glob.A || {};
  glob.A.arrays = {};
  var arr = glob.A.arrays;

  arr.deepCopy = function(a) {
    var newArr = [];
    for (var i = 0; i < a.length; ++i) {
      newArr.push(a[i]);
    }
    return newArr;
  };

  arr.sortNums = function(arr1) {
    arr1.sort(function(a, b) {
      return a - b;
    });
    return arr1;
  };

  arr.matrix = function(rows, cols, init) {
    var arr = [], i = 0;
    if (rows && cols) {
      for (i; i < cols; ++i) {
        var columns = [];
        for (var j = 0; j < rows; ++j) {
          columns[j] = init;
        }
        arr[i] = columns;
      }
    } else {
      var length = rows || cols;
      for (i; i < length; i++) {
          arr.push(init);
      }
    }
    return arr;
  };

})(window);
