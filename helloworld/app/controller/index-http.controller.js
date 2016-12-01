angular.module('pdApp').controller('IndexHttpController', IndexHttpController);


function IndexHttpController($http){
    var vm = this;

    vm.listaDeDados = [];
    vm.carregarDados = carregarDados;
    vm.gridOptions = {
        data: 'vm.listaDeDados'
    };

    function carregarDados(){
        $http.get('https://jsonplaceholder.typicode.com/photos')
            .then(onPesquisarResult, onPesquisarFault);
    }

    function onPesquisarResult(response){
        vm.listaDeDados = response.data;
    }

    function onPesquisarFault(rejection){

    }
}



