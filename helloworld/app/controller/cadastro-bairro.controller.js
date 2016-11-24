angular.module('pdApp').controller('CadastroBairroController', CadastroBairroController);

CadastroBairroController.$inject = ['$scope', 'AlertService', '$state', '$rootScope'];

function CadastroBairroController($scope, AlertService, $state, $rootScope){

    $scope.entidade = {};
    $scope.listaBairros = [];
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.editar = editar;
    $scope.visualizar = visualizar;

    var idSequence = 0;

    function salvar(){


        if($scope.bairroForm.$valid){
            $scope.entidade.id = idSequence;
            idSequence++;
            $scope.listaBairros.push(angular.copy($scope.entidade));
            limpar();
            $scope.bairroForm.$setPristine();

            AlertService.success("Registro salvo com sucesso!");
        }else{

            $scope.bairroForm.nome.$pristine = false;
            $scope.bairroForm.cidade.$pristine = false;
            $scope.bairroForm.estado.$pristine = false;

            AlertService.error("Formulário inválido!");
        }
    }

    function limpar(){
        $scope.entidade = {};
        $scope.bairroForm.$setPristine();

        angular.element('#nome').focus();
    }

    $scope.gridOptions = {
        data: 'listaBairros',
        enableColumnMenus: false,
        columnDefs:[
            {name: "Nome do bairro", field: 'nome'},
            {name: "Cidade", field: 'cidade'},
            {name: "Estado", field: 'estado'},
            {name: '', field: 'excluir', cellTemplate: "app/template/grid/cell-template-button.html", width: 100}
        ]
    };

    function excluir(linha){

        for(var i = $scope.listaBairros.length - 1; i >=0; i--){
            if($scope.listaBairros[i].id === linha.id){
                $scope.listaBairros.splice(i, 1);
            }
        }

        AlertService.success("Registro excluido com sucesso!");
    }

    function editar(linha){


        for(var i = $scope.listaBairros.length - 1; i >=0; i--){
            if($scope.listaBairros[i].id === linha.id){
                $scope.listaBairros.splice(i, 1);
            }
        }

        $scope.entidade = angular.copy(linha);
    }

    function visualizar(linha){
        $rootScope.bairro = angular.copy(linha);

        $rootScope.listaBairros = angular.copy($scope.listaBairros);
        $rootScope.idSequence = angular.copy($scope.idSequence);
        $state.go('visualizarBairro');
    }

    inicializarController();
    function inicializarController(){
        if($rootScope.listaBairros){
            $scope.listaBairros = angular.copy($rootScope.listaBairros);

            delete $rootScope.listaBairros;
        }

        if($rootScope.idSequence){
            $scope.idSequence = angular.copy($rootScope.idSequence);

            delete $rootScope.idSequence;
        }
    }
}