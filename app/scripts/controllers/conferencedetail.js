'use strict';

angular.module('myconfsControllers').controller('ConfDetailCtrl', function ($scope, $location){
    $scope.location = {
        name : $location.search().name,
        server : $location.host(),
        port : $location.port()
    }
});
