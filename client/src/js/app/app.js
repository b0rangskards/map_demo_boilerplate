(function () {
    'use strict';

    angular
        .module('demoApp', ['ngMaterial', 'ngAnimate', 'oitozero.ngSweetAlert', 'treasure-overlay-spinner', 'vAccordion'])

        .constant('BASE_URL', window.location.origin)
        .constant('NAV_HEIGHT', 50)
        .constant('LAYER_LIMIT', 5)

        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('pink');
        });

}());

