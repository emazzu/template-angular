angular.module("inspinia")
    .controller("0000ctrl", function ($scope) {


    var map = GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333
    });


    //    declare variables de ambito global al controller
    $scope.variable1 = "variable 1";
    $scope.variable2 = "variable 2";


    //    metodo sin parametros
    $scope.metodoUno = function() {
        $scope.metodo1 = "metodo 1";
    };


});
