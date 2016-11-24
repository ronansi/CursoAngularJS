
angular.module('pdApp').controller('IndexWatchController', IndexWatchController);

IndexWatchController.$inject = ['$scope'];

function IndexWatchController($scope){

    $scope.cor = '';
    $scope.styleDiv = {
        width: '150px',
        height: '150px'
    };
    $scope.classeCSS = "";

    $scope.$watch('cor', function(newValue, oldValue){

        if(newValue === oldValue) return;

        $scope.styleDiv.backgroundColor = newValue;
    });

}