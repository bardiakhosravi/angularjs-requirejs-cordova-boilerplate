/**
 * Created by bkhosravi on 2014-04-01.
 */
define(["angular", "controller/HomeController"],

    function(angular, HomeController) { 

        var app = angular.module('mainApp', []);
        
        app.controller("HomeController", HomeController);

        return app;
    }
);