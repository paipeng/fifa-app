/**
 * Created by paipeng on 28.05.15.
 */


var module = angular.module('fifa.RankingService', []);


module.factory("Fifa", ['$http', function($http) {

    //'use strict';

    var url = "http://46.101.157.123:3004/ranking";
    return {
        getRanking: function() {
            return $http.get(url).success(function(response) {
                return response;
            }).error(function(err) {
                return null;
            });
        }
    }
}]);
