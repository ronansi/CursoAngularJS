(function () {
    'use strict';

    angular
        .module('pdAppArquitetura')
        .directive('pdCrud', pdCrud);

    function pdCrud() {
        return {
            link: link,
            restrict: 'E',
            transclude: 'true',
            templateUrl: 'arquitetura/directives/pd-crud/pd-crud.html',
            scope: {
                titulo: '@',
                salvar: '&',
                limpar: '&',
                excluir: '&',
                exibirBotaoExcluir: '='
            }
        };

        function link(scope, element, attrs) {
            scope.formName = 'pdCrudForm' + scope.$id;

        }
    }
})();

