(function() {
  window.plainJS = window.plainJS || {};
  window.plainJS.promise = {};

  var p = window.plainJS.promise;

  p.basic = function(fail) {
    return Q.Promise(function(resolve, reject, notify) {
      if (fail === 'fail') {
        var error = new Error('Wow, this is an error');
        reject(error);
      } else {
        resolve(0);
      }
    });
  };

}).call(this);
