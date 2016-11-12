angular.module('pdApp').controller('IndexController', IndexController);


function IndexController($scope){
    $scope.nome = "Ronan";

    $scope.alerta = alerta;

    $scope.formulario = {};

    function alerta(){
        alert("Olá");
    }
}