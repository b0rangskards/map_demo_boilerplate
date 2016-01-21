(function () {
    'use strict';

    angular
        .module('demoApp', ['ngMaterial', 'ngAnimate', 'restangular', 'oitozero.ngSweetAlert', 'treasure-overlay-spinner'])

        .config(['RestangularProvider', function (RestangularProvider) {
            //set the base url for api calls on our RESTful services
            var baseUrl = window.location.origin + '/api';
            RestangularProvider.setBaseUrl(baseUrl);
        }]);

    //.config(function ($mdThemingProvider) {
    //    $mdThemingProvider.theme('default')
    //        .primaryPalette('red')
    //        .accentPalette('pink');
    //});

    console.log('demo app initialized!');

}());

