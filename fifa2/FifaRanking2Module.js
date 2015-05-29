/**
 * Created by paipeng on 29.05.15.
 */


var fifaRankingModule = angular.module('fifa.RankingModule2', [
    'ui.router',
    'ngResource',
    'fifa2.RankingService'
]);

fifaRankingModule.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        console.log("output loaded modules " + fifaRankingModule.requires);
        $stateProvider.state('ranking', {
            url: '/ranking',
            //templateUrl: '/fifa/views/rankingList.html'
            template: ' <div data-ng-controller="ListRankingCtrl" ng-show="rankingList"> <h1>Ranking List</h1> <table st-table="displayed" class="table table-striped"> <thead> <tr> <th st-ratio="20" st-sort="firstName">Ranking</th> <th st-ratio="20" st-sort="lastName">Country</th> <th st-ratio="10" st-sort="age">Total Points</th> <th st-ratio="30" st-sort="email">Previous Points</th> <th st-ratio="20" st-sort="balance">Diff</th> </tr> </thead> <tbody> <tr ng-repeat="row in rankingList"> <td st-ratio="20">{{row.Rank}}</td> <td st-ratio="20"><img src="http://img.fifa.com/images/flags/4/{{row[\'4\']}}.png"> {{row.Team | uppercase}}</td> <td st-ratio="10">{{row["Total Points"]}}</td> <td st-ratio="30">{{row["Previous Points"]}}</td> <td st-ratio="20">{{getDiff(row["Total Points"], row["Previous Points"])}}</td> </tr> </tbody> <tfoot> <tr> <td colspan="5" class="text-center"> <div st-items-by-page="20" st-pagination=""></div> </td> </tr> </tfoot> </table> </div> '
        });
    }
]);


fifaApp.controller('ListRankingCtrl', ['$rootScope', '$scope', 'Fifa',
    function(rootScope, scope, Fifa) {
        console.log("ListRankingCtr")

        scope.config = {
            itemsPerPage: 25,
            fillLastPage: "yes"
        };

        scope.getDiff = function (a, b) {
            return parseInt(a) - parseInt(b);
        };

        Fifa.getRanking().then(function(res) {
            rootScope.rankingList = res.data[0];
            console.log("ranking list " + JSON.stringify(scope.rankingList[0]));
        });
    }
]);


angular.module('fifa2.RankingService', [])
    .factory("Fifa", ['$http', function($http) {

        //'use strict';

        var url = "http://46.101.157.123:3004/ranking";
        return {
            getRanking: function() {
                return $http.get(url).success(function(response) {
                    return response.data;
                }).error(function(err) {
                    return null;
                });
            }
        }
    }
]);
