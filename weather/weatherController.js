/**
 * Created by paipeng on 29.05.15.
 */


var weatherModule = angular.module('weather.Module', [
    'ui.router',
    'ngResource'
]).controller('weatherList', ['$rootScope', '$scope',
    function(rootScope, scope) {
        scope.list = true;

        scope.text = "hello";

    }
]);