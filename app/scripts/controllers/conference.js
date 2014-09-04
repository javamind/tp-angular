'use strict';

angular.module('myconfs').controller('ConfCtrl', function ($scope, ConferenceService){

    $scope.conferences = ConferenceService.query();


    $scope.addConference = function(){
        alert('Ajout d\'une nouvelle conférence')
    }


    $scope.zoomConference = function(name){
        alert('Modification de la conférence ' + name)
    }
});

angular.module('myconfs').controller('ConfDetailCtrl', function ($scope, $location){
    $scope.location = {
        name : $location.search().name,
        server : $location.host(),
        port : $location.port()
    }
});
