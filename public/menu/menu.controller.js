'use strict';

angular.module('landingPageApp.menu', ['ui.bootstrap']).controller('MenuCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.menuItems = [
        {
            title: 'HOME',
            state: 'home',
            selected: true
        },
        {
            title: 'ABOUT',
            state: 'about',
            selected: false
        },
        {
            title: 'CONTACT',
            state: 'contact',
            selected: false
        }
    ];

    $scope.selectedState = 'home';

    $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
        for(var i = 0; i < $scope.menuItems.length; ++i){
            $scope.menuItems[i].selected = $scope.menuItems[i].state === toState.name;
        }

        $scope.selectedState = toState.name;
    });
}]);