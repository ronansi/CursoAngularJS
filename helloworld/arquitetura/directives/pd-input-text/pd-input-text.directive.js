(function () {
    'use strict';

    angular
        .module('pdAppArquitetura')
        .directive('pdInputText', pdInputText);

    function pdInputText() {
       return {
            link: link,
            restrict: 'E',
            templateUrl: 'arquitetura/directives/pd-input-text/pd-input-text.html',
            scope: {
                label: '@',
                placeholder: '@',
                ngModel: '=',
                colspan: "@"

            }
        };

        function link(scope, element, attrs) {
            scope.idInputText = 'pdInputText' + scope.$id;

            scope.colspan = 'col-md-' + (scope.colspan || '3');


        }
    }
})();

