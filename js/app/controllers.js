'use strict';

var app = angular.module('app.controllers', []);

app.controller('AppCtrl', ['$scope', function($scope) {

    // config
    $scope.app = {
        name: 'Facebook - AngularJS',
        version: '1.0',
    }



  }])


app.controller("HeaderCtrl", ['$scope','$facebook', function($scope, $facebook){

    $scope.login = function(){
        $facebook.login().then(function(){
            console.log("log")
        });
    }

}]);


app.controller('MeCtrl', ['$scope', '$http', '$facebook', function($scope, $http, $facebook) {


    $scope.share = function(){
        $facebook.api("").then(function(response){
        
        });
    }

    $facebook.api("/me").then(function(response){

    });
    
    $facebook.api("/me/posts").then(function(response){
        $scope.posts = response.data;
    });



}]);



app.controller('HomeCtrl', ['$scope', '$http', '$facebook', function($scope, $http, $facebook) {

    $scope.data = {};

    $scope.share = function(){
        $facebook.api("").then(function(response){
        
        });
    }

    $scope.posts_home = function(type, url){
        $facebook.api("/me/home?limit=25&"+type+"="+url).then(function(response){
            $scope.posts = response.data;
            $scope.data.after = response.paging.cursors.after;
            $scope.data.before = response.paging.cursors.before;
        });
    }

    $scope.posts_home("","");

}]);





app.controller('InboxCtrl', ['$scope', '$http', '$facebook', function($scope, $http, $facebook) {
 
    $facebook.api("/me/inbox").then(function(response){
        $scope.inbox = response.data;
    });

}]);