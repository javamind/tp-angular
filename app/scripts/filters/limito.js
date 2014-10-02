'use strict';

angular.module('myconfsFilters').filter('limitStringTo', function () {
    return function (input, size) {
        if (!size) {
            size = 100;
        }
        if (!input || input.length <= size) {
            return input;
        }
        return input.substr(0, size) + "...";
    }
});

