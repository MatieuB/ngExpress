var app = angular.module('pirates',[])

app.directive('mbPostDirective',function () {
  return {
    template: '<h1>hello world</h1>',
    controller: function ($scope) {
    }
  }
})
