'use strict';

angular.module('myconfsServices').factory('ThemeService', function ($resource, myconfsConstants) {
    var getResource = function () {
        return $resource(myconfsConstants.url + 'theme/:id', {id: '@id'})
    }

    var findConfTheme = function (conf, mythemes) {
        //On parcours chaque theme de la conference
        if (conf.themes) {
            var themesComplet = [];
            conf.themes.forEach(function (theme) {
                //On recherche le theme ayant cet id
                var filter = mythemes.filter(function (th) {
                    return th.id === theme;
                });
                if (filter.length > 0) {
                    themesComplet.push(filter[0]);
                }
            });
            conf.themes = themesComplet;
        }
    }

    return {
        getResource: getResource,
        findConfTheme: findConfTheme
    }
});