angular.module('pdApp').controller('CadastroCarroController', CadastroCarroController);


function CadastroCarroController($scope, AlertService){

    $scope.entidade = {};
    $scope.listaCarros = [];
    $scope.salvar = salvar;
    $scope.limpar = limpar;

    function salvar(){


        if($scope.carroForm.$valid){

            $scope.listaCarros.push(angular.copy($scope.entidade));
            limpar();
            $scope.carroForm.$setPristine();

            AlertService.success("Registro salvo com sucesso!");
        }else{

            $scope.carroForm.nome.$pristine = false;
            $scope.carroForm.cor.$pristine = false;
            $scope.carroForm.dataLancamento.$pristine = false;

            AlertService.error("Formulário inválido!");
        }
    }

    function limpar(){
        $scope.entidade = {};
        $scope.carroForm.$setPristine();

        angular.element('#nome').focus();
    }
}