/**
 * Created by bkhosravi on 2014-04-01.
 */

define([], function() {

    var HomeController =  function($scope) {
        $scope.message = "Hello Mahsa!";
    };

    return ["$scope", HomeController];

});

