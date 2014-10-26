var BasicApp = angular.module('BasicApp', []);

BasicApp.controller('MainCtrl', function($scope, $http) {
  $scope.foo = 'Bar';
  $scope.items = [{
    name: 'Foo'
  }, {
    name: 'Bar'
  }];
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
