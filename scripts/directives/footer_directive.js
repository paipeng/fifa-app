/**
 * Created by paipeng on 29.05.15.
 */


angular.module("fifaApp").directive("footer", function() {
    return {
        restrict: 'A',
        templateUrl: '/views/footer.html',
        scope: true,
        transclude : false,
        controller: 'FooterController'
    };
});