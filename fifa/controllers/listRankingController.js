/**
 * Created by paipeng on 28.05.15.
 */


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


        //scope.ranking = Fifa.getRanking();
    }
]);