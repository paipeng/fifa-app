/**
 * Created by paipeng on 28.05.15.
 */


var app = angular.module('fifaApp')


app.controller('NavCtrl', ['$rootScope', '$scope',
    function(rootScope, scope) {
        scope.list = true;
    }
    ]);