angular.module('pdApp').controller('IndexHttpController', IndexHttpController);


function IndexHttpController(PessoaService){
    var vm = this;

    vm.listaDeDados = [];
    vm.carregarDados = carregarDados;


    vm.gridOptions = {
        data: 'vm.listaDeDados'
    };

    function carregarDados(){
        PessoaService.pesquisarFotos().then(onPesquisarResult, onPesquisarFault);
    }

    function onPesquisarResult(response){
        vm.listaDeDados = response;
    }

    function onPesquisarFault(rejection){

    }
}



