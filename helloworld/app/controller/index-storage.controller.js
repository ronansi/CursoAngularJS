angular.module('pdApp').controller('IndexStorageController', IndexStorageController);


function IndexStorageController(localStorageService){
    var vm = this;

    vm.lista = [
        {nome: 'Ronan', sexo: 'M'}
    ];

    vm.listaAux = [];
    vm.setarInformacaoNoStorage = setarInformacaoNoStorage;

    iniciar();
    function iniciar(){
        verificarSuporteAoStorage();
        vm.listaAux = localStorageService.get("listaTeste");
    }

    function verificarSuporteAoStorage(){
        if(!localStorageService.isSupported){
            alert("Não suportado");
        }
    }

    function setarInformacaoNoStorage(){
        localStorageService.set("listaTeste", vm.lista);
    }
}



