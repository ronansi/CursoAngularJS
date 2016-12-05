(function () {
    'use strict';

    angular
        .module('pdApp')
        .service('ProdutoService', ProdutoService);

    ProdutoService.$inject = ['PdCrudService'];

    /* @ngInject */
    function ProdutoService(PdCrudService) {

        this.getPdCrudService = function() {
            var cs = new PdCrudService('produtoController');

            cs.metodoSalvar = 'salvarProduto';

            return cs;
        };

    }

})();

