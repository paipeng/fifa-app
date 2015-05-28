/**
 * Created by paipeng on 28.05.15.
 */


var app = angular.module('fifaApp', [
    'fifa.RankingService'
]);


app.controller('NavCtrl', ['$rootScope', '$scope', 'Fifa',
    function(rootScope, scope, Fifa) {
        scope.list = true;
        Fifa.getRanking().then(function(res) {
            scope.rankingList = res;
            console.log("ranking list " + JSON.stringify(res));
        });

        //scope.rankingList = res;


    }
    ]);