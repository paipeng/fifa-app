/**
 * Created by paipeng on 29.05.15.
 */

var fifaRankingModule = angular.module('fifa.RankingModule', [
    'ui.router',
    'ngResource',
    'fifa.RankingService'
]);

fifaRankingModule.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        console.log("output loaded modules " + fifaRankingModule.requires);
        $stateProvider.state('ranking', {
            url: '/ranking',
            templateUrl: '/fifa/views/rankingList.html'
        });
    }
]);