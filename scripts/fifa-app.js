/**
 * Created by paipeng on 28.05.15.
 */

'use strict';

//var routingConfig;
var fifaApp = angular.module('fifaApp', [
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'fifa.RankingService',
    'fifa.RankingModule',
    'weather.Module'
]);

fifaApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {


        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/views/home.html'
        });
        $stateProvider.state('about', {
            url: '/about',
            templateUrl: '/views/about.html'
        });
        $stateProvider.state('ranking', {
            url: '/ranking',
            templateUrl: '/views/rankingList.html'
        });

    }
])
    .run(['$state', function ($state) {
        $state.transitionTo('ranking');
    }])
;