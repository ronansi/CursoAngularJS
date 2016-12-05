(function () {
    'use strict';

    angular
        .module('pdApp')
        .controller('CadastroProdutoController', CadastroProdutoController);

    CadastroProdutoController.$inject = ['ProdutoService'];

    /* @ngInject */
    function CadastroProdutoController(ProdutoService) {
        var vm = this;

        vm.pdCrudService = ProdutoService.getPdCrudService();

        vm.titulo = 'Cadastro de produtos';

    }

})();

