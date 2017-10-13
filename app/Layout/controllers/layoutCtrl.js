'use strict';
angular.module('app').controller('layoutCtrl', function ($scope) {

    $scope.app = {
        name: 'Angulr',
        version: '1.3.3',
        // for chart colors
        color: {
            primary: '#7266ba',
            info: '#23b7e5',
            success: '#27c24c',
            warning: '#fad733',
            danger: '#f05050',
            light: '#e8eff0',
            dark: '#3a3f51',
            black: '#1c2b36'
        },
        settings: {
            themeID: 1,
            navbarHeaderColor: 'bg-info',
            // navbarCollapseColor: 'bg-white-only',
            navbarCollapseColor: 'bg-info',
            // asideColor: 'bg-light',
            asideColor: 'bg-dark',
            headerFixed: true,
            asideFixed: false,
            asideFolded: false,
            asideDock: false,
            container: false
        }
    }

});