/**
 * Created by bkhosravi on 2014-04-01.
 */
define([
    "angular"
    //'./config',
    /*'controller/HomeController'*/],

    function(angular) { 

        //'use strict';

        var app = angular.module('mainApp', []);
        
        app.controller("HomeController", function($scope) {
            $scope.message = "Hello World!";
        });

        return app;
    }
);