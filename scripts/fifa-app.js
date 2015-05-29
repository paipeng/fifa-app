/**
 * Created by paipeng on 28.05.15.
 */

'use strict';

//var routingConfig;
var fifaApp = angular.module('fifaApp', [
    'ui.router',
    'ngResource',
    'ui.bootstrap',
    'fifa2.RankingModule',
    'weather2.Module'
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


    }
])
    .run(['$state', function ($state) {
        $state.transitionTo('home');
    }])
;