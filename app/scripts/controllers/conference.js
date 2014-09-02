'use strict';

angular.module('myconfs').controller('ConfCtrl', function ($scope){
    $scope.conferences = conferences;

    $scope.addConference = function(){
        alert('Ajout d\’une nouvelle conférence')
    }

    $scope.zoomConference = function(code){
        alert('Modification de la conférence' + code)
    }
});