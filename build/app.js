'use strict';
$(function () {


    angular.bootstrap(document, ['app']);

})


'use strict';


angular.module('app', [
  //  'ngAnimate',
   // 'ngCookies',
  //  'ngResource',
  //  'ngSanitize',
  //  'ngTouch',
 //   'ngStorage',
    'ui.fullscreen',
    'ui.Nav',
    'ui.router',
    'ui.bootstrap',
   // 'ui.load',
   // 'ui.jq',
    //'ui.validate',
   //  'oc.lazyLoad',
   // 'pascalprecht.translate',
     'app.layout',
    'app.digitalschool'
])//.config(['$translateProvider', function ($translateProvider) {
//    // Register a loader for the static files
//    // So, the module will search missing translation tables under the specified urls.
//    // Those urls are [prefix][langKey][suffix].
//    $translateProvider.useStaticFilesLoader({
//        prefix: 'plugin/l10n/',
//        suffix: '.js'
//    });
//    // Tell the module what language to use by default
//    $translateProvider.preferredLanguage('en');
//    // Tell the module to store the language in the local storage
//    $translateProvider.useLocalStorage();
//}]);


    'use strict';


angular.module('app.digitalschool', ['ui.router'])

    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
       

    }]);
angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app/Layout/views/footer.tpl.html","<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>\r\n    <title></title>\r\n	<meta charset=\"utf-8\" />\r\n</head>\r\n<body>\r\n\r\n</body>\r\n</html>\r\n");
$templateCache.put("app/Layout/views/header.tpl.html","      <!-- navbar header -->\r\n<div class=\"navbar-header {{app.settings.navbarHeaderColor}}\">\r\n    <button class=\"pull-right visible-xs dk\" ui-toggle-class=\"show\" data-target=\".navbar-collapse\">\r\n        <i class=\"glyphicon glyphicon-cog\"></i>\r\n    </button>\r\n    <button class=\"pull-right visible-xs\" ui-toggle-class=\"off-screen\" data-target=\".app-aside\" ui-scroll=\"app\">\r\n        <i class=\"glyphicon glyphicon-align-justify\"></i>\r\n    </button>\r\n    <!-- brand -->\r\n    <a href=\"#/\" class=\"navbar-brand text-lt\">\r\n        <i class=\"fa fa-btc\"></i>\r\n        <img src=\"style/img/logo.png\" alt=\".\" class=\"hide\">\r\n        <span class=\"hidden-folded m-l-xs\">{{app.name}}</span>\r\n    </a>\r\n    <!-- / brand -->\r\n</div>\r\n<!-- / navbar header -->\r\n<!-- navbar collapse -->\r\n<div class=\"collapse pos-rlt navbar-collapse box-shadow {{app.settings.navbarCollapseColor}}\">\r\n    <!-- buttons -->\r\n    <div class=\"nav navbar-nav hidden-xs\">\r\n        <a href class=\"btn no-shadow navbar-btn\" ng-click=\"app.settings.asideFolded = !app.settings.asideFolded\">\r\n            <i class=\"fa {{app.settings.asideFolded ? \'fa-indent\' : \'fa-dedent\'}} fa-fw\"></i>\r\n        </a>\r\n        <!--<a href class=\"btn no-shadow navbar-btn\" ui-toggle-class=\"show\" target=\"#aside-user\">\r\n            <i class=\"icon-user fa-fw\"></i>\r\n        </a>-->\r\n    </div>\r\n    <!-- / buttons -->\r\n    <!-- link and dropdown -->\r\n    <!--<ul class=\"nav navbar-nav hidden-sm\">\r\n      <li class=\"dropdown pos-stc\" dropdown>\r\n        <a href class=\"dropdown-toggle\" dropdown-toggle>\r\n          <span>Mega</span>\r\n          <span class=\"caret\"></span>\r\n        </a>\r\n        <div class=\"dropdown-menu wrapper w-full bg-white\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"m-l-xs m-t-xs m-b-xs font-bold\">Pages <span class=\"badge badge-sm bg-success\">10</span></div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-6\">\r\n                  <ul class=\"list-unstyled l-h-2x\">\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Profile</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Post</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Search</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Invoice</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                  <ul class=\"list-unstyled l-h-2x\">\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Price</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Lock screen</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Sign in</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Sign up</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 b-l b-light\">\r\n              <div class=\"m-l-xs m-t-xs m-b-xs font-bold\">UI Kits <span class=\"label label-sm bg-primary\">12</span></div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-6\">\r\n                  <ul class=\"list-unstyled l-h-2x\">\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Buttons</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Icons <span class=\"badge badge-sm bg-warning\">1000+</span></a>\r\n                    </li>\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Grid</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Widgets</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                  <ul class=\"list-unstyled l-h-2x\">\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Bootstap</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Sortable</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Portlet</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href><i class=\"fa fa-fw fa-angle-right text-muted m-r-xs\"></i>Timeline</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4 b-l b-light\">\r\n              <div class=\"m-l-xs m-t-xs m-b-sm font-bold\">Analysis</div>\r\n              <div class=\"text-center\">\r\n                <div class=\"inline\">\r\n                  <div ui-jq=\"easyPieChart\" ui-options=\"{\r\n                      percent: 65,\r\n                      lineWidth: 50,\r\n                      trackColor: \'{{app.color.light}}\',\r\n                      barColor: \'{{app.color.info}}\',\r\n                      scaleColor: false,\r\n                      size: 100,\r\n                      rotate: 90,\r\n                      lineCap: \'butt\',\r\n                      animate: 2000\r\n                    }\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"dropdown\" dropdown>\r\n        <a href class=\"dropdown-toggle\" dropdown-toggle>\r\n          <i class=\"fa fa-fw fa-plus visible-xs-inline-block\"></i>\r\n          <span translate=\"header.navbar.new.NEW\">New</span> <span class=\"caret\"></span>\r\n        </a>\r\n        <ul class=\"dropdown-menu\" role=\"menu\">\r\n          <li><a href=\"#\" translate=\"header.navbar.new.PROJECT\">Projects</a></li>\r\n          <li>\r\n            <a href>\r\n              <span class=\"badge bg-info pull-right\">5</span>\r\n              <span translate=\"header.navbar.new.TASK\">Task</span>\r\n            </a>\r\n          </li>\r\n          <li><a href translate=\"header.navbar.new.USER\">User</a></li>\r\n          <li class=\"divider\"></li>\r\n          <li>\r\n            <a href>\r\n              <span class=\"badge bg-danger pull-right\">4</span>\r\n              <span translate=\"header.navbar.new.EMAIL\">Email</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n    </ul>-->\r\n    <!-- / link and dropdown -->\r\n    <!-- search form -->\r\n    <form class=\"navbar-form navbar-form-sm navbar-left shift\" ui-shift=\"prependTo\" target=\".navbar-collapse\" role=\"search\" ng-controller=\"TypeaheadDemoCtrl\">\r\n        <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" ng-model=\"selected\" typeahead=\"state for state in states | filter:$viewValue | limitTo:8\" class=\"form-control input-sm bg-light no-border rounded padder\" placeholder=\"Search projects...\">\r\n                <span class=\"input-group-btn\">\r\n                    <button type=\"submit\" class=\"btn btn-sm bg-light rounded\"><i class=\"fa fa-search\"></i></button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <!-- / search form -->\r\n    <!-- nabar right -->\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"dropdown hidden-sm\" is-open=\"lang.isopen\" dropdown>\r\n            <a href class=\"dropdown-toggle\" dropdown-toggle>\r\n                {{selectLang}} <b class=\"caret\"></b>\r\n            </a>\r\n            <!-- dropdown -->\r\n            <ul class=\"dropdown-menu animated fadeInRight w\">\r\n                <li ng-repeat=\"(langKey, label) in langs\">\r\n                    <a ng-click=\"setLang(langKey, $event)\" href>{{label}}</a>\r\n                </li>\r\n            </ul>\r\n            <!-- / dropdown -->\r\n        </li>\r\n        <li class=\"hidden-xs\">\r\n            <a ui-fullscreen></a>\r\n        </li>\r\n        <!--<li class=\"dropdown\" dropdown>\r\n          <a href class=\"dropdown-toggle\" dropdown-toggle>\r\n            <i class=\"icon-bell fa-fw\"></i>\r\n            <span class=\"visible-xs-inline\">Notifications</span>\r\n            <span class=\"badge badge-sm up bg-danger pull-right-xs\">2</span>\r\n          </a>\r\n          <!-- dropdown -->\r\n        <!--<div class=\"dropdown-menu w-xl animated fadeInUp\">\r\n          <div class=\"panel bg-white\">\r\n            <div class=\"panel-heading b-light bg-light\">\r\n              <strong>You have <span>2</span> notifications</strong>\r\n            </div>\r\n            <div class=\"list-group\">\r\n              <a href class=\"media list-group-item\">\r\n                <span class=\"pull-left thumb-sm\">\r\n                  <img src=\"img/a0.jpg\" alt=\"...\" class=\"img-circle\">\r\n                </span>\r\n                <span class=\"media-body block m-b-none\">\r\n                  Use awesome animate.css<br>\r\n                  <small class=\"text-muted\">10 minutes ago</small>\r\n                </span>\r\n              </a>\r\n              <a href class=\"media list-group-item\">\r\n                <span class=\"media-body block m-b-none\">\r\n                  1.0 initial released<br>\r\n                  <small class=\"text-muted\">1 hour ago</small>\r\n                </span>\r\n              </a>\r\n            </div>\r\n            <div class=\"panel-footer text-sm\">\r\n              <a href class=\"pull-right\"><i class=\"fa fa-cog\"></i></a>\r\n              <a href=\"#notes\" data-toggle=\"class:show animated fadeInRight\">See all the notifications</a>\r\n            </div>\r\n          </div>\r\n        </div>-->\r\n        <!-- / dropdown -->\r\n        <!--</li>\r\n        <li class=\"dropdown\" dropdown>\r\n          <a href class=\"dropdown-toggle clear\" dropdown-toggle>\r\n            <span class=\"thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm\">\r\n              <img src=\"img/a0.jpg\" alt=\"...\">\r\n              <i class=\"on md b-white bottom\"></i>\r\n            </span>\r\n            <span class=\"hidden-sm hidden-md\">John.Smith</span> <b class=\"caret\"></b>\r\n          </a>-->\r\n        <!-- dropdown -->\r\n        <!--<ul class=\"dropdown-menu animated fadeInRight w\">\r\n          <li class=\"wrapper b-b m-b-sm bg-light m-t-n-xs\">\r\n            <div>\r\n              <p>300mb of 500mb used</p>\r\n            </div>\r\n            <progressbar value=\"60\" class=\"progress-xs m-b-none bg-white\"></progressbar>\r\n          </li>\r\n          <li>\r\n            <a href>\r\n              <span class=\"badge bg-danger pull-right\">30%</span>\r\n              <span>Settings</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a ui-sref=\"app.page.profile\">Profile</a>\r\n          </li>\r\n          <li>\r\n            <a ui-sref=\"app.docs\">\r\n              <span class=\"label bg-info pull-right\">new</span>\r\n              Help\r\n            </a>\r\n          </li>\r\n          <li class=\"divider\"></li>\r\n          <li>\r\n            <a ui-sref=\"access.signin\">Logout</a>\r\n          </li>\r\n        </ul>-->\r\n        <!-- / dropdown -->\r\n        <!--</li>-->\r\n    </ul>\r\n    <!-- / navbar right -->\r\n\r\n</div>\r\n<!-- / navbar collapse -->");
$templateCache.put("app/Layout/views/navigation.tpl.html","<!-- list -->\r\n<ul class=\"nav\">\r\n    <li class=\"hidden-folded padder m-t m-b-sm text-muted text-xs\">\r\n        <span translate=\"aside.nav.HEADER\">Navigation</span>\r\n    </li>\r\n    <li>\r\n        <a href class=\"auto\">\r\n            <span class=\"pull-right text-muted\">\r\n                <i class=\"fa fa-fw fa-angle-right text\"></i>\r\n                <i class=\"fa fa-fw fa-angle-down text-active\"></i>\r\n            </span>\r\n            <i class=\"glyphicon glyphicon-stats icon text-primary-dker\"></i>\r\n            <span class=\"font-bold\" translate=\"aside.nav.DASHBOARD\">Dashboard</span>\r\n        </a>\r\n        <ul class=\"nav nav-sub dk\">\r\n            <li class=\"nav-sub-header\">\r\n                <a href>\r\n                    <span translate=\"aside.nav.DASHBOARD\">Dashboard</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.dashboard-v1\">\r\n                    <span>Dashboard v1</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.dashboard-v2\">\r\n                    <b class=\"label bg-info pull-right\">N</b>\r\n                    <span>Dashboard v2</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n    <li ui-sref-active=\"active\">\r\n        <a ui-sref=\"app.calendar\">\r\n            <i class=\"glyphicon glyphicon-calendar icon text-info-dker\"></i>\r\n            <span class=\"font-bold\" translate=\"aside.nav.CALENDAR\">Calendar</span>\r\n        </a>\r\n    </li>\r\n    <li ui-sref-active=\"active\">\r\n        <a ui-sref=\"app.mail.list\">\r\n            <b class=\"badge bg-info pull-right\">9</b>\r\n            <i class=\"glyphicon glyphicon-envelope icon text-info-lter\"></i>\r\n            <span class=\"font-bold\" translate=\"aside.nav.EMAIL\">Email</span>\r\n        </a>\r\n    </li>\r\n    <li>\r\n        <a href class=\"auto\">\r\n            <span class=\"pull-right text-muted\">\r\n                <i class=\"fa fa-fw fa-angle-right text\"></i>\r\n                <i class=\"fa fa-fw fa-angle-down text-active\"></i>\r\n            </span>\r\n            <i class=\"glyphicon glyphicon-th-large icon text-success\"></i>\r\n            <span class=\"font-bold\">Apps</span>\r\n        </a>\r\n        <ul class=\"nav nav-sub dk\">\r\n            <li class=\"nav-sub-header\">\r\n                <a href>\r\n                    <span>Apps</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"apps.note\">\r\n                    <i class=\"glyphicon glyphicon-th-large icon text-success\"></i>\r\n                    <span>Note</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"apps.contact\">\r\n                    <span>Contacts</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.weather\">\r\n                    <span>Weather</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n\r\n    <li class=\"line dk\"></li>\r\n\r\n    <li class=\"hidden-folded padder m-t m-b-sm text-muted text-xs\">\r\n        <span translate=\"aside.nav.components.COMPONENTS\">Components</span>\r\n    </li>\r\n    <li>\r\n        <a href class=\"auto\">\r\n            <span class=\"pull-right text-muted\">\r\n                <i class=\"fa fa-fw fa-angle-right text\"></i>\r\n                <i class=\"fa fa-fw fa-angle-down text-active\"></i>\r\n            </span>\r\n            <b class=\"badge bg-info pull-right\">3</b>\r\n            <i class=\"glyphicon glyphicon-th\"></i>\r\n            <span>Layout</span>\r\n        </a>\r\n        <ul class=\"nav nav-sub dk\">\r\n            <li class=\"nav-sub-header\">\r\n                <a href>\r\n                    <span>Layout</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"layout.app\">\r\n                    <span>Application</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"layout.fullwidth\">\r\n                    <span>Full width</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"layout.mobile\">\r\n                    <span>Mobile</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n    <li ng-class=\"{active:$state.includes(\'app.ui\')}\">\r\n        <a href class=\"auto\">\r\n            <span class=\"pull-right text-muted\">\r\n                <i class=\"fa fa-fw fa-angle-right text\"></i>\r\n                <i class=\"fa fa-fw fa-angle-down text-active\"></i>\r\n            </span>\r\n            <i class=\"glyphicon glyphicon-briefcase icon\"></i>\r\n            <span translate=\"aside.nav.components.ui_kits.UI_KITS\">UI Kits</span>\r\n        </a>\r\n        <ul class=\"nav nav-sub dk\">\r\n            <li class=\"nav-sub-header\">\r\n                <a href>\r\n                    <span translate=\"aside.nav.components.ui_kits.UI_KITS\">UI Kits</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.ui.buttons\">\r\n                    <span translate=\"aside.nav.components.ui_kits.BUTTONS\">Buttons</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.ui.icons\">\r\n                    <b class=\"badge bg-info pull-right\">3</b>\r\n                    <span translate=\"aside.nav.components.ui_kits.ICONS\">Icons</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.ui.grid\">\r\n                    <span translate=\"aside.nav.components.ui_kits.GRID\">Grid</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.ui.widgets\">\r\n                    <b class=\"badge bg-success pull-right\">13</b>\r\n                    <span translate=\"aside.nav.WIDGETS\">Widgets</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.ui.bootstrap\">\r\n                    <b class=\"badge bg-primary pull-right\">16</b>\r\n                    <span translate=\"aside.nav.components.ui_kits.BOOTSTRAP\">Bootstrap</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.ui.sortable\">\r\n                    <span translate=\"aside.nav.components.ui_kits.SORTABLE\">Sortable</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.ui.portlet\">\r\n                    <span translate=\"aside.nav.components.ui_kits.PORTLET\">Portlet</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.ui.timeline\">\r\n                    <span translate=\"aside.nav.components.ui_kits.TIMELINE\">Timeline</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.ui.tree\">\r\n                    <span>Tree</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.ui.toaster\">\r\n                    <span>Toaster</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.ui.jvectormap\">\r\n                    <span translate=\"aside.nav.components.ui_kits.VECTOR_MAP\">Vector Map</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.ui.googlemap\">\r\n                    <span>Google Map</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n    <li ng-class=\"{active:$state.includes(\'app.table\')}\">\r\n        <a href class=\"auto\">\r\n            <span class=\"pull-right text-muted\">\r\n                <i class=\"fa fa-fw fa-angle-right text\"></i>\r\n                <i class=\"fa fa-fw fa-angle-down text-active\"></i>\r\n            </span>\r\n            <b class=\"label bg-primary pull-right\">2</b>\r\n            <i class=\"glyphicon glyphicon-list\"></i>\r\n            <span translate=\"aside.nav.components.table.TABLE\">Table</span>\r\n        </a>\r\n        <ul class=\"nav nav-sub dk\">\r\n            <li class=\"nav-sub-header\">\r\n                <a href>\r\n                    <span translate=\"aside.nav.components.table.TABLE\">Table</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.table.static\">\r\n                    <span translate=\"aside.nav.components.table.TABLE_STATIC\">Table static</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.table.datatable\">\r\n                    <span translate=\"aside.nav.components.table.DATATABLE\">Datatable</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.table.footable\">\r\n                    <span translate=\"aside.nav.components.table.FOOTABLE\">Footable</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.table.grid\">\r\n                    <span>ngGrid</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n    <li ng-class=\"{active:$state.includes(\'app.form\')}\">\r\n        <a href class=\"auto\">\r\n            <span class=\"pull-right text-muted\">\r\n                <i class=\"fa fa-fw fa-angle-right text\"></i>\r\n                <i class=\"fa fa-fw fa-angle-down text-active\"></i>\r\n            </span>\r\n            <i class=\"glyphicon glyphicon-edit\"></i>\r\n            <span translate=\"aside.nav.components.form.FORM\">Form</span>\r\n        </a>\r\n        <ul class=\"nav nav-sub dk\">\r\n            <li class=\"nav-sub-header\">\r\n                <a href>\r\n                    <span translate=\"aside.nav.components.form.FORM\">Form</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.form.elements\">\r\n                    <span translate=\"aside.nav.components.form.FORM_ELEMENTS\">Form elements</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.form.validation\">\r\n                    <span translate=\"aside.nav.components.form.FORM_VALIDATION\">Form validation</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.form.wizard\">\r\n                    <span translate=\"aside.nav.components.form.FORM_WIZARD\">Form wizard</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.form.fileupload\">\r\n                    <span>File upload</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.form.imagecrop\">\r\n                    <span>Image crop</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.form.select\">\r\n                    <span>Select</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.form.slider\">\r\n                    <span>Slider</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.form.editor\">\r\n                    <span>Editor</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n    <li ui-sref-active=\"active\">\r\n        <a ui-sref=\"app.chart\">\r\n            <i class=\"glyphicon glyphicon-signal\"></i>\r\n            <span translate=\"aside.nav.components.CHART\">Chart</span>\r\n        </a>\r\n    </li>\r\n    <li ng-class=\"{active:$state.includes(\'app.page\')}\">\r\n        <a href class=\"auto\">\r\n            <span class=\"pull-right text-muted\">\r\n                <i class=\"fa fa-fw fa-angle-right text\"></i>\r\n                <i class=\"fa fa-fw fa-angle-down text-active\"></i>\r\n            </span>\r\n            <i class=\"glyphicon glyphicon-file icon\"></i>\r\n            <span translate=\"aside.nav.components.pages.PAGES\">Pages</span>\r\n        </a>\r\n        <ul class=\"nav nav-sub dk\">\r\n            <li class=\"nav-sub-header\">\r\n                <a href>\r\n                    <span translate=\"aside.nav.components.pages.PAGES\">Pages</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.page.profile\">\r\n                    <span translate=\"aside.nav.components.pages.PROFILE\">Profile</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.page.post\">\r\n                    <span translate=\"aside.nav.components.pages.POST\">Post</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.page.search\">\r\n                    <span translate=\"aside.nav.components.pages.SEARCH\">Search</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.page.invoice\">\r\n                    <span translate=\"aside.nav.components.pages.INVOICE\">Invoice</span>\r\n                </a>\r\n            </li>\r\n            <li ui-sref-active=\"active\">\r\n                <a ui-sref=\"app.page.price\">\r\n                    <span>Price</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a ui-sref=\"lockme\">\r\n                    <span translate=\"aside.nav.components.pages.LOCK_SCREEN\">Lock screen</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a ui-sref=\"access.signin\">\r\n                    <span translate=\"aside.nav.components.pages.SIGNIN\">Signin</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a ui-sref=\"access.signup\">\r\n                    <span translate=\"aside.nav.components.pages.SIGNUP\">Signup</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a ui-sref=\"access.forgotpwd\">\r\n                    <span translate=\"aside.nav.components.pages.FORGOT_PASSWORD\">Forgot password</span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a ui-sref=\"access.404\">\r\n                    <span translate=\"aside.nav.components.pages.404\">404</span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </li>\r\n\r\n    <li class=\"line dk hidden-folded\"></li>\r\n\r\n    <li class=\"hidden-folded padder m-t m-b-sm text-muted text-xs\">\r\n        <span translate=\"aside.nav.your_stuff.YOUR_STUFF\">Your Stuff</span>\r\n    </li>\r\n    <li>\r\n        <a ui-sref=\"app.page.profile\">\r\n            <i class=\"icon-user icon text-success-lter\"></i>\r\n            <b class=\"badge bg-success pull-right\">30%</b>\r\n            <span translate=\"aside.nav.your_stuff.PROFILE\">Profile</span>\r\n        </a>\r\n    </li>\r\n    <li>\r\n        <a ui-sref=\"app.docs\">\r\n            <i class=\"icon-question icon\"></i>\r\n            <span translate=\"aside.nav.your_stuff.DOCUMENTS\">Documents</span>\r\n        </a>\r\n    </li>\r\n</ul>\r\n<!-- / list -->");}]);
    'use strict';


angular.module('app.layout', ['ui.router'])

    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
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

    }]);

    'use strict';

    angular.module('app.digitalschool').controller('digitalschoolcontrol', ["$scope", function ($scope) {



        }]);

    


'use strict';

/* Controllers */
 
// bootstrap controller

  angular.module('app')
  .controller('AccordionDemoCtrl',["$scope", function($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: 'Accordion group header - #1',
        content: 'Dynamic group body - #1'
      },
      {
        title: 'Accordion group header - #2',
        content: 'Dynamic group body - #2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
  }])
   
  .controller('AlertDemoCtrl', ['$scope', function($scope) {
    $scope.alerts = [
      { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
      { type: 'info', msg: 'Heads up! This alert needs your attention, but it is not super important.' },
      { type: 'warning', msg: 'Warning! Best check yo self, you are not looking too good...' }
    ];

    $scope.addAlert = function() {
      $scope.alerts.push({type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }])
  
  .controller('ButtonsDemoCtrl', ['$scope', function($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
      left: false,
      middle: true,
      right: false
    };
  }])
  
  .controller('CarouselDemoCtrl', ['$scope', function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      slides.push({
        image: 'style/img/c' + slides.length + '.jpg',
        text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
  }])
   
  .controller('DropdownDemoCtrl', ['$scope', function($scope) {
    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      //console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  }])
  
  .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }])
   
  .controller('ModalDemoCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }])
  
  .controller('PaginationDemoCtrl', ['$scope', '$log', function($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.info('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
  }])
 
  .controller('PopoverDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Title';
  }])
   
  .controller('ProgressDemoCtrl', ['$scope', function($scope) {
    $scope.max = 200;

    $scope.random = function() {
      var value = Math.floor((Math.random() * 100) + 1);
      var type;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      $scope.showWarning = (type === 'danger' || type === 'warning');

      $scope.dynamic = value;
      $scope.type = type;
    };
    $scope.random();

    $scope.randomStacked = function() {
      $scope.stacked = [];
      var types = ['success', 'info', 'warning', 'danger'];

      for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
          var index = Math.floor((Math.random() * 4));
          $scope.stacked.push({
            value: Math.floor((Math.random() * 30) + 1),
            type: types[index]
          });
      }
    };
    $scope.randomStacked();
  }])
  
  .controller('TabsDemoCtrl', ['$scope', function($scope) {
    $scope.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];
  }])
  
  .controller('RatingDemoCtrl', ['$scope', function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
  }])
 
  .controller('TooltipDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.dynamicTooltipText = 'dynamic';
    $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
  }])
  
  .controller('TypeaheadDemoCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function(val) {
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false
        }
      }).then(function(res){
        var addresses = [];
        angular.forEach(res.data.results, function(item){
          addresses.push(item.formatted_address);
        });
        return addresses;
      });
    };
  }])
  
  .controller('DatepickerDemoCtrl', ['$scope', function($scope) {
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
  }])
 
  .controller('TimepickerDemoCtrl', ['$scope', function($scope) {
    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
      var d = new Date();
      d.setHours( 14 );
      d.setMinutes( 0 );
      $scope.mytime = d;
    };

    $scope.changed = function () {
      //console.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function() {
      $scope.mytime = null;
    };
  }]);
'use strict';

/* Controllers */

angular.module('app')
  // Flot Chart controller 
  .controller('FlotChartDemoCtrl', ['$scope', function($scope) {
    $scope.d = [ [1,6.5],[2,6.5],[3,7],[4,8],[5,7.5],[6,7],[7,6.8],[8,7],[9,7.2],[10,7],[11,6.8],[12,7] ];

    $scope.d0_1 = [ [0,7],[1,6.5],[2,12.5],[3,7],[4,9],[5,6],[6,11],[7,6.5],[8,8],[9,7] ];

    $scope.d0_2 = [ [0,4],[1,4.5],[2,7],[3,4.5],[4,3],[5,3.5],[6,6],[7,3],[8,4],[9,3] ];

    $scope.d1_1 = [ [10, 120], [20, 70], [30, 70], [40, 60] ];

    $scope.d1_2 = [ [10, 50],  [20, 60], [30, 90],  [40, 35] ];

    $scope.d1_3 = [ [10, 80],  [20, 40], [30, 30],  [40, 20] ];

    $scope.d2 = [];

    for (var i = 0; i < 20; ++i) {
      $scope.d2.push([i, Math.sin(i)]);
    }   

    $scope.d3 = [ 
      { label: "iPhone5S", data: 40 }, 
      { label: "iPad Mini", data: 10 },
      { label: "iPad Mini Retina", data: 20 },
      { label: "iPhone4S", data: 12 },
      { label: "iPad Air", data: 18 }
    ];

    $scope.refreshData = function(){
      $scope.d0_1 = $scope.d0_2;
    };

    $scope.getRandomData = function() {
      var data = [],
      totalPoints = 150;
      if (data.length > 0)
        data = data.slice(1);
      while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50,
          y = prev + Math.random() * 10 - 5;
        if (y < 0) {
          y = 0;
        } else if (y > 100) {
          y = 100;
        }
        data.push(y);
      }
      // Zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
      }
      return res;
    }

    $scope.d4 = $scope.getRandomData();
  }]);
'use strict';
angular.module('app').controller('layoutCtrl', ["$scope", function ($scope) {

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

}]);
'use strict';
    angular .module('app.digitalschool').factory(['$http', '$q',function($http,$q) {

        var EvaResultSchool = {};

        EvaResultSchool.GetData = function () {

            return;

        }
        }]);