/**
 * Created by paipeng on 28.05.15.
 */


fifaApp.controller('NavCtrl', ['$rootScope', '$scope',
    function(rootScope, scope) {
        console.log("NavCtrl")
        scope.list = true;

        //scope.rankingList = res;

        //scope.menuList = ['menu1', 'menu2'];
        initMenu();

        function initMenu() {
            rootScope.menuList = [];
            console.log("initMenu");
            console.log("output loaded modules " + fifaApp.requires);
            var loaded_modules = fifaApp.requires;
            //var modules = loaded_modules.split(',');
            angular.forEach(loaded_modules, function(value, key) {
                if (value === 'weather.Module') {
                    rootScope.menuList.push({name: 'Weather', url: '/weather'});
                } else if (value === 'fifa.RankingModule') {
                    rootScope.menuList.push({name: 'Fifa Ranking', url: '/ranking'});
                }
            })
            console.log("modules " + loaded_modules[0]);

        }

        scope.showLine = function() {
            console.log("showLine "  + rootScope.menuList.length);

            if (rootScope.menuList && rootScope.menuList.length > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
    ]);