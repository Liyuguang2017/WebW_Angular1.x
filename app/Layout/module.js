    'use strict';


angular.module('app.layout', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                url: "/app",
                controller: 'layoutCtrl',
                templateUrl: 'app/Layout/layout.tpl.html'
                })

              .state('app.dashboard-v1', {
                  url: '/dashboard-v1',
                  templateUrl: 'app/DigitalSchool/views/app_dashboard_v1.html',
              })

              //  views: {
                //    root: {
                       // controller: "layoutCtrl",
                       
             //       }
             //   },
                //resolve: {
                //    scripts: function (lazyScript) {
                //        return lazyScript.register([
                //                'sparkline',
                //                'easy-pie'
                //        ]);
                //    }
                //}
           
        $urlRouterProvider
             .otherwise('/app/dashboard-v1');

    });