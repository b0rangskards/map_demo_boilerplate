(function(){
'use strict';

angular.module('demoApp')
    .controller('indexController', ['$rootScope', '$mdSidenav', indexController]);

    function indexController ($rootScope, $mdSidenav) {
        var vm = this;

        // Show Treasure Overlay Spinner
        $rootScope.spinner = {
            active: false
        };

        vm.initialize = initialize;
        vm.toggleLayerPanel = buildToggler('layerPanel');
        vm.toggleSearchPanel = buildToggler('searchPanel');
        vm.toggleFilterPanel = buildToggler('filterPanel');
        vm.closeSideNav = closeSideNav;

        vm.lastSideNavOpenId = '';

        vm.initialize();

        function initialize() {
            console.log('initialize called');
        }

        function buildToggler(navID) {
            return function () {
                if (vm.lastSideNavOpenId && $mdSidenav(vm.lastSideNavOpenId).isOpen()) {
                    closeSideNav(vm.lastSideNavOpenId);
                    if(vm.lastSideNavOpenId == navID) return;
                }

                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        vm.lastSideNavOpenId = navID;
                    });
            }
        }

        function closeSideNav(navID) {
            $mdSidenav(navID).close()
                .then(function () {
                    console.log(navID + " layer panel is closed.");
                });
        }
    }
}());