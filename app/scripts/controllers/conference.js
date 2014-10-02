'use strict';

angular.module('myconfsControllers').controller('ConfCtrl', function ($scope, ConferenceService, ThemeService){
    $scope.themes = ThemeService.query();
    ConferenceService.query(function(datas){
        //On parcours chaque conference
        datas.forEach(function(conf){
            //On parcours chaque theme de la conference
            if(conf.themes){
                var themesComplet = [];
                conf.themes.forEach(function(theme){
                    //On recherche le theme ayant cet id
                    var filter = $scope.themes.filter(function(th){
                        return th.id === theme;
                    });
                    if(filter.length>0){
                        themesComplet.push(filter[0]);
                    }
                });
                conf.themes = themesComplet;
            }
        });
        $scope.conferences = datas;
    });


    $scope.addConference = function(){
        alert('Ajout d\'une nouvelle conférence')
    }


    $scope.zoomConference = function(name){
        alert('Modification de la conférence ' + name)
    }
});

