/**
 * Created by paipeng on 29.05.15.
 */

var weatherModule = angular.module('weather.Module', [
    'ui.router',
    'ngResource'
]);

weatherModule.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        console.log("weather.Module loaded " + weatherModule.requires);

        $stateProvider.state('weather', {
            url: '/weather',
            templateUrl: '/weather/weatherList.html'
        });

    }
]);
