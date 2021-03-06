angular.module("pdApp").config(config);

function config($stateProvider, $urlRouterProvider){

    var cadastroCarro = {
        name: 'cadastroCarro',
        url: '/cadastro-carro',
        templateUrl: 'app/views/carro/cadastro-carro.html',
        resolve: {
            carregarController: function($ocLazyLoad){
                return $ocLazyLoad.load('app/views/carro/cadastro-carro.controller.js');
            }
        }
    };

    var pesquisaCarro = {
        name: 'pesquisaCarro',
        url: '/pesquisa-carro',
        templateUrl: 'app/views/carro/pesquisa-carro.html',
        resolve: {
            carregarController: function($ocLazyLoad){
                return $ocLazyLoad.load('app/views/carro/pesquisa-carro.controller.js');
            }
        }
    };

    var visualizarBairro = {
        name: 'visualizarBairro',
        url: '/visualizar-bairro',
        templateUrl: 'visualizarBairro.html'
    };

    var cadastroBairro = {
        name: 'cadastroBairro',
        url: '/cadastro-bairro',
        templateUrl: 'cadastro-bairro.html',
        resolve: {
            carregarController: function($ocLazyLoad){
                return $ocLazyLoad.load('app/controller/cadastro-bairro.controller.js');
            }
        }
    };

    $stateProvider
        .state('cadastroCarro', cadastroCarro)
        .state('pesquisaCarro', pesquisaCarro)
        .state('visualizarBairro', visualizarBairro)
        .state('cadastroBairro', cadastroBairro);

    $urlRouterProvider.otherwise('/cadastro-bairro');
}