/**
 * Created by paipeng on 28.05.15.
 */

'use strict';

//var routingConfig;
var fifaApp = angular.module('fifaApp', [
    'ui.router',
    'ngResource',
    'fifa.RankingService'
]);

fifaApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    console.log("outoup loaded modules " + fifaApp.requires);

}
]);