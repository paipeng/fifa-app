/**
 * Created by paipeng on 28.05.15.
 */

'use strict';

//var routingConfig;
var fifaApp = angular.module('fifaApp', [
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'fifa.RankingModule',
    'weather.Module'
]);

fifaApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {


        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        });
        $stateProvider.state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        });


    }
])
    .run(['$state', '$rootScope', function ($state, $rootScope) {
        $state.transitionTo('home');

        $rootScope.menuList = [];
        initMenu();

        function initMenu() {
            console.log("initMenu");
            console.log("output loaded modules " + fifaApp.requires);
            var loaded_modules = fifaApp.requires;
            //var modules = loaded_modules.split(',');
            angular.forEach(loaded_modules, function(value, key) {
                if (value === 'weather.Module') {
                    $rootScope.menuList.push({name: 'Weather', url: '/weather'});
                } else if (value === 'fifa.RankingModule') {
                    $rootScope.menuList.push({name: 'Fifa Ranking', url: '/ranking'});
                }
            })
            console.log("modules " + loaded_modules[0]);

        }

    }])
;
