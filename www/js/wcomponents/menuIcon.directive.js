(function(){
    'use strict';

    angular
        .module('evaluon')
        .directive('menuIcon', menuIcon);

    function menuIcon(){
        return{
            restrict: 'E',
            templateUrl: 'views/wcomponents/menuIcon.html',
            scope: {
                ref: '@',
                img: '@',
                description: '@',
                title: '@'
            }
        };
    };

})();
