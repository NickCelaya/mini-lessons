angular.module('swapi')
.service('swapiService', function($http) {

var baseUrl = 'http://swapi.co/api/'

this.getData = function() {
  return $http({
    method: 'GET',
    url: baseUrl + 'planets'
  }).then(function(response) {
    return response.data.results
  })
}


var arr = [1,2,3,4,5]

this.fn = function() {
  return arr;
}





})
