angular.module("inspinia")
    .controller("1001controller", function ($scope) {


    //    declare variables de ambito global al controller
    $scope.variable1 = "variable 1";
    $scope.variable2 = "variable 2";


    //    metodo sin parametros
    $scope.metodoUno = function() {
        $scope.metodo1 = "metodo 1";
    };

    //    metodo con parametros
    $scope.metodoDos = function(item) {
        $scope.metodo2 = item;
    };

});
