angular.module('pdApp').controller('CadastroCarroController', CadastroCarroController);

CadastroCarroController.$inject = ['$scope', 'AlertService'];

function CadastroCarroController($scope, AlertService){

    $scope.entidade = {};
    $scope.listaCarros = [];
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.editar = editar;

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

    $scope.gridOptions = {
        data: 'listaCarros',
        enableColumnMenus: false,
        columnDefs:[
            {name: "Nome do carro", field: 'carro', enableCellEdit: true},
            {name: "Cor do carro", field: 'cor', enableCellEdit: true},
            {name: "Data de lançamento", field: 'dataLancamento', cellFilter: 'date: "dd/MM/yyyy"'},
            {name: '', field: 'excluir', cellTemplate: "app/template/grid/cell-template-button.html", width: 70}
        ]
    }

    function excluir(linha){
        $scope.listaCarros.splice($scope.listaCarros.indexOf(linha).$index, 1);
        AlertService.success("Registro excluido com sucesso!");
    }

    function editar(linha){
        $scope.listaCarros.splice($scope.listaCarros.indexOf(linha).$index, 1);
        $scope.entidade = angular.copy(linha);
    }
}