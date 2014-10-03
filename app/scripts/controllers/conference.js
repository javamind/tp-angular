'use strict';

angular.module('myconfsControllers').controller('ConfCtrl', function ($scope, $location, ConferenceService, ThemeService){
    $scope.themes = ThemeService.getResource().query();
    ConferenceService.query(function(datas){
        //On parcours chaque conference
        datas.forEach(function(conf){
            //On parcours chaque theme de la conference pour trouver le libelle du theme
            ThemeService.findConfTheme(conf,$scope.themes);
        });
        $scope.conferences = datas;
    });


    $scope.addConference = function(){
        $location.path('editconference/0')
    }

    $scope.editConference = function(id){
        $location.path('editconference/' + id)
    }

    $scope.zoomConference = function(id){
        $location.path('conference/' + id)
    }
});

