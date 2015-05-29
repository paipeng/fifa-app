/**
 * Created by paipeng on 29.05.15.
 */


angular.module('weather.Module')
    .controller('weatherList', ['$rootScope', '$scope',
    function(rootScope, scope) {
        scope.list = true;

        scope.text = "hello";

    }
]);