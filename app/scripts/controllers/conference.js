'use strict';

angular.module('myconfs').controller('ConfCtrl', function ($scope){
    $scope.conferences = conferences;

    $scope.addConference = function(){
        alert('Ajout d\�une nouvelle conf�rence')
    }

    $scope.zoomConference = function(code){
        alert('Modification de la conf�rence' + code)
    }
});