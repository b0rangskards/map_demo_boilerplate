(function () {
    'use strict';

    angular.module('demoApp')
        .controller('layerController', ['$mdSidenav', layerController]);

    function layerController($mdSidenav) {
        var vm = this;

        vm.layers = [
            {
                label: 'Meters',
                selected: false
            },
            {
                label: 'Primary Circuits',
                selected: false
            },
            {
                label: 'Secondary Circuits',
                selected: false
            },
            {
                label: 'Transformers',
                selected: false
            },
            {
                label: 'Poles',
                selected: false
            },
            {
                label: 'Outages',
                selected: false
            },
            {
                label: 'Imagery',
                selected: false
            }
        ];


        /* Non Scope Functions here */

    }
}());