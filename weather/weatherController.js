/**
 * Created by paipeng on 29.05.15.
 */


angular.module('weather.Module')
    .controller('weatherController', ['$rootScope', '$scope', 'Weather',
    function(rootScope, scope, Weather) {
        scope.list = true;

        scope.text = "hello 2";

        scope.weatherList = [];

        initWeatherList();

        function initWeatherList() {
            scope.countryList = [];
            if (rootScope.rankingList === undefined || rootScope.rankingList.size <= 0) {
                scope.countryList.push({country: 'Germany'});
                scope.countryList.push({country: 'China'});
                scope.countryList.push({country: 'France'});

                angular.forEach(scope.countryList, function(value, key) {
                    setWeatherForCountry(value.country);
                });

            } else {
                angular.forEach(rootScope.rankingList, function(value, key) {
                    setWeatherForCountry(value.Team);
                })
            }


        };


        function setWeatherForCountry(country) {
            Weather.getCapitalByCountry(country).success(function(res) {
                console.log('getCapitalByCountry res ' + JSON.stringify(res));
                var city = res[0].capital;
                Weather.getWeatherByCity(city).success(function (res) {
                    console.log('getWeatherByCity res ' + JSON.stringify(res));
                    scope.weatherList.push({country: country, weather: res});
                })
            });
        };
    }
]);