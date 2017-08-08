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

                const segundos_ano = 31536000;
                var gasto_segundo = ($scope.valor / segundos_ano);

                var date_begin = new Date(2017, 0, 1);
                var today = new Date();

                var dif = today - date_begin;

                console.log(dif);
                console.log(gasto_segundo)
                $scope.gastos = (dif*gasto_segundo);
                console.log($scope.gastos)

                $interval(function(){
                    $scope.gastos+= (gasto_segundo);
                    console.log(gasto_segundo)
                },1000);

            }

        }
    }

})();
