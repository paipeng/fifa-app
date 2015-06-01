/**
 * Created by paipeng on 28.05.15.
 */


fifaApp.controller('NavCtrl', ['$rootScope', '$scope',
    function(rootScope, scope) {
        console.log("NavCtrl")
        scope.list = true;

        //scope.rankingList = res;

        //scope.menuList = ['menu1', 'menu2'];

        scope.showLine = function() {
            if (rootScope.menuList && rootScope.menuList.length > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
    ]);