var BasicApp = angular.module('BasicApp', []);

BasicApp.controller('MainCtrl', function($scope, $http, ajaxService) {
  $scope.foo = 'Bar';
  $scope.items = [{
    name: 'Foo'
  }, {
    name: 'Bar'
  }];
  $scope.getData = function() {
    ajaxService.getData(function(result) {
      $scope.dataReceived = true;
      $scope.data = result.data;
    });
  };
});

BasicApp.directive('box', function() {
  return {
    restrict: 'E',
    template: '<div class="box"><ul><li ng-repeat="item in items">{{item.name}}</li></ul></div>'
  };
});

BasicApp.value('foo', 'bar');

BasicApp.factory('basicService', function() {
  return {
    addOne: function(number) {
      return number + 1;
    }
  };
});

BasicApp.factory('ajaxService', function($http) {
  return {
    getData: function(cb) {
      return $http.get('/data.json').then(function(data) {
        cb(data);
      });
    }
  };
});
