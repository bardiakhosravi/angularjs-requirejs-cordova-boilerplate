/**
 * Created by bkhosravi on 2014-04-01.
 */
define(["angular"],

    function(angular) { 

        var app = angular.module('mainApp', []);
        
        app.controller("HomeController", function($scope) {
            $scope.message = "Hello World!";
        });

        return app;
    }
);