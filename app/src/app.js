'use strict';

/* App Module */

var bgspmsapp = angular.module('bgspmsapp', [
  'ngRoute',
  'bgspmsControllers',
  'navData',
   'ngAnimate',
  'ngMaterial','ngMdIcons','ngAria','ngTable',
]).config(function($mdThemingProvider, $mdIconProvider){

                  $mdIconProvider
                      .defaultIconSet("./assets/svg/avatars.svg", 128)
                      .icon("menu"       , "./assets/svg/menu.svg"        , 24)
                      .icon("share"      , "./assets/svg/share.svg"       , 24)
                      .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
                      .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
                      .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
                      .icon("phone"      , "./assets/svg/phone.svg"       , 512);

                      $mdThemingProvider.theme('primary')
                          .primaryPalette('brown')
                          .accentPalette('red');

              });




              
bgspmsapp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/attendance', {
        templateUrl: 'partials/attendance.html',
        controller: 'AttendanceCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

  
  
  
  