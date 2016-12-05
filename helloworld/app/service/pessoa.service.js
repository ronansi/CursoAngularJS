(function () {
    'use strict';

    angular
        .module('pdApp')
        .service('PessoaService', PessoaService);

    PessoaService.$inject = ['$q', '$http'];

    /* @ngInject */
    function PessoaService($q, $http) {
        this.pesquisarFotos = pesquisarFotos;

        ////////////////

        function pesquisarFotos() {
            var listaFotos1, listaFotos2;
            var deferred = $q.defer();

            $http.get('https://jsonplaceholder.typicode.com/photos')
                .then(onPesquisar1Result, onPesquisarFault);
            $http.get('https://jsonplaceholder.typicode.com/photos')
                .then(onPesquisar2Result, onPesquisarFault);

            return deferred.promise;

            function onPesquisar1Result(response){
                listaFotos1 = response.data;
                resolvePromise();
            }

            function onPesquisar2Result(response){
                listaFotos2 = response.data;
                resolvePromise();
            }

            function resolvePromise(){
                if(listaFotos1 && listaFotos2){
                    var lista = listaFotos1.concat(listaFotos2);
                    deferred.resolve(lista);
                }
            }

            function onPesquisarFault(rejection){
                deferred.reject(rejection);
            }
        }
    }

})();


