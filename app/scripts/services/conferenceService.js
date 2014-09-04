'use strict';

angular.module('myconfs').factory('ConferenceService',
    function($resource){
        return $resource('http://localhost:8080/conference/:id', {id:'@id'});
    }
);