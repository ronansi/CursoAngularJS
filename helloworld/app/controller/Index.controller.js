angular.module('pdApp').controller('IndexController', IndexController);

IndexController.$inject = ['AlertService'];

function IndexController(AlertService){
    var vm = this;

    vm.entidade = {};
    vm.salvar = salvar;
    vm.limpar = limpar;
    vm.excluir = excluir;

    vm.provider = [
        {descricao: "Masculino", valor: "M"},
        {descricao: "Feminino", valor: "F"}
    ];

    function salvar(){
        AlertService.success("Registro salvo com sucesso")
    }

    function limpar(){
        AlertService.success("Registro limpo com sucesso")
    }

    function excluir(){
        AlertService.success("Registro excluido com sucesso")
    }
}



