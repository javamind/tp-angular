'use strict';

angular.module('myconfs').factory('ConferenceService',
    function($resource){
        return $resource('http://localhost:8080/conference/:id', {id:'@id'});
    }
);

angular.module('myconfs').factory('ThemeService',
    function($resource){
        return $resource('http://localhost:8080/theme/:id', {id:'@id'});
    }
);