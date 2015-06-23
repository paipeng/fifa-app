/**
 * Created by paipeng on 29.05.15.
 */





angular.module('weather.Service', [])
    .factory("Weather", ['$http', function($http) {

        //'use strict';

        var url = "https://restcountries.eu/rest/v1/name/";

        var weather_url = "https://webapp.paipeng.com/fifa-weather-rest?&q="

        function getCapitalByCountry(country) {
            return $http.get(url+country);
        }

        function getWeatherByCity(city) {
            return $http.get(weather_url+city).success(function(response) {
                return response.data;
            }).error(function(err) {
                return null;
            });
        }


        return {
            getWeatherByCity: function(city) {
                console.log("getWeatherByCity " + city);
                return getWeatherByCity(city);

            },
            getCapitalByCountry: function(country) {
                console.log("getCapitalByCountry " + country);
                return getCapitalByCountry(country);
            }

        }
    }]);
