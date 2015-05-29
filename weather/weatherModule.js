/**
 * Created by paipeng on 29.05.15.
 */

var weatherModule = angular.module('weather.Module', [
    'ui.router',
    'ngResource'
]);

weatherModule.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        console.log("output loaded modules " + weatherModule.requires);




        $stateProvider.state('user.home', {
            url: '/weather',
            templateUrl: '/weatherList.html',
            controller: 'HomeCtrl'
        });
    }
]);