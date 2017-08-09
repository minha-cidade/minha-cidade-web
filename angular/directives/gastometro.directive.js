/**
 * Created by Josue on 23/07/2017.
 */

'use strict';

(function(){
    angular
        .module("Minhacidade")
        .directive("gastometro", gastometro);


    gastometro.$inject = ['$parse', '$http', '$sce', '$interval'];

    function gastometro($parse, $http, $sce, $interval){
        return {
            restrict: 'AE',
            templateUrl: 'partials/gastometro/gastometro.html',
            scope: {
                "id": "@id",
                "tipo": "@tipo",
                "valor": "@valor"
            },
            link: function($scope, alem, attrs){

                if($scope.tipo){
                    console.log($scope.tipo);

                }else{
                    var now = new Date();
                    var start = new Date(now.getFullYear(), 0, 0);
                    var diff = new Date(now - start);
                    var sT = diff.getTime()/1000;
                    var sY = 31536000;


                    $scope.gastos = (sT/sY)*$scope.valor;

                    var gasto_segundo = $scope.gastos/sT;


                    $interval(function(){
                        $scope.gastos+= (gasto_segundo);
                    },1000);

                }
            }

        }
    }

})();
