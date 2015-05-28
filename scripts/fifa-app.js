/**
 * Created by paipeng on 28.05.15.
 */

'use strict';

//var routingConfig;
var app = angular.module('fifaApp', [
    'ui.router',
    'ngResource'
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    console.log("outoup loaded modules " + app.requires);

}
]);