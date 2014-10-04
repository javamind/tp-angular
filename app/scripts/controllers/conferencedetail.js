'use strict';

angular.module('myconfsControllers').controller('ConfDetailCtrl', function ($scope, $location, $routeParams, $filter, ConferenceService, ThemeService){
    $scope.themes = ThemeService.getResource().query();

    ConferenceService.get({id:$routeParams.confId}, function(conf){
        //On parcours chaque theme de la conference pour trouver le libelle du theme
        if(conf){
            ThemeService.findConfTheme(conf,$scope.themes);
        }
        //On reprend les dates pour les avoir correctement dans le formulaire
        importDate(conf);
        $scope.conference = conf;
    });

    $scope.save = function () {
        $scope.conference.enddate = convertDate($scope.conference.enddate2);
        $scope.conference.startdate = convertDate($scope.conference.startdate2);

        if (!$scope.conference.id){
            ConferenceService.save($scope.conference, function(data){
                $scope.conference = data;
                importDate($scope.conference);
            });
        }
        else{
            $scope.conference.$save(importDate);
        }

    }

    $scope.delete = function ($event) {
        $event.stopPropagation();
        ConferenceService.delete($scope.conference, function(data){
            $scope.return();
        });

    };


    $scope.return = function () {
        $location.path("/");
    }

    var convertDate = function(date){
        var mynewdate;
        if(date) {
            mynewdate = new Date(date);
            if(mynewdate){
                mynewdate = mynewdate.getTime();
            }
        }
        return mynewdate;
    }

    var importDate = function(conf){
        if(conf.startdate) conf.startdate2 = $filter('date')(conf.startdate, "yyyy-MM-dd HH:mm:ss");
        if(conf.enddate)  conf.enddate2 = $filter('date')(conf.enddate, "yyyy-MM-dd HH:mm:ss");
    }
});
