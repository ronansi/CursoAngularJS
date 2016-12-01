(function () {
    'use strict';

    angular
        .module('pdAppArquitetura')
        .directive('pdHelloWorld', pdHelloWorld);

    function pdHelloWorld() {
        return {
            restrict: 'E',
            template: '<div> Este é meu primeiro componente</div>'
        };
    }
})();

