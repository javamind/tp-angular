'use strict';

angular.module('myconfsServices').factory('ThemeService',
    function($resource){
        return $resource('http://localhost:8080/theme/:id', {id:'@id'});
    }
);