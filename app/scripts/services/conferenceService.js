'use strict';

angular.module('myconfsServices').factory('ConferenceService',
    function($resource, myconfsConstants){
        return $resource(myconfsConstants.url + 'conference/:id', {id:'@_id'});
    }
);
