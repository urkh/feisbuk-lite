'use strict';

var app = angular.module('app', [
    'ngFacebook',
    'ui.router',
    'ui.bootstrap',
    'app.controllers',
    //'app.services',
    //'app.directives',
    //'uiGmapgoogle-maps'
]);

app.config(
  [          '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$facebookProvider',
    function ($stateProvider,   $urlRouterProvider,   $controllerProvider,   $compileProvider,   $filterProvider,   $provide,   $facebookProvider) {
        
        //app.controller = $controllerProvider.register;
        //app.service = $provide.service;
        //app.constant = $provide.constant;
        //app.value = $provide.value;

        $facebookProvider.setAppId('450921025076769');
        $facebookProvider.setVersion("v2.3");
        $facebookProvider.setPermissions("public_profile, user_activities, user_posts, user_photos, read_stream");

        $urlRouterProvider.otherwise('/feisbuk/me');
        $stateProvider            
            .state('feisbuk', {
                abstract: true,
                url: '/feisbuk',
                templateUrl: 'tpl/base.html'
            })

            
            .state('feisbuk.me', {
                url: '/me',
                templateUrl: 'tpl/me.html'
            })

            .state('feisbuk.home', {
                url: '/home',
                templateUrl: 'tpl/home.html'
            })

            .state('feisbuk.inbox', {
                url: '/inbox',
                templateUrl: 'tpl/inbox.html'
            })


    }
  ]
);



app.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;      
        

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk')); 



    }
  ]
);
