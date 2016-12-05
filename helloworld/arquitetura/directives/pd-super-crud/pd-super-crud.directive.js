(function () {
    'use strict';

    angular
        .module('pdApp')
        .directive('pdSuperCrud', pdSuperCrud);

    pdSuperCrud.$inject = ['dependency'];

    /* @ngInject */
    function pdSuperCrud(dependency) {
        return {
            link: link,
            restrict: 'E',
            transclude: true,
            scope: {
                titulo: '@',
                service: '='
            }
        };

        function link(scope, element, attrs) {
            scope.formName = 'pdSuperCrud' + scope.$id;
        }
    }

})();

