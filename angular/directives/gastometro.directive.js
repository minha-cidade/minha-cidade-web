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
                    var startYear = new Date(now.getFullYear(), 0, 0);
                    var startDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

                    var dDaySeconds = new Date(now - startDay);
                    var dYersSeconds = new Date(startDay - startYear);

                    var dDs = dDaySeconds.getTime()/1000;
                    var dYs = dYersSeconds.getTime()/1000;

                    var gasto_segundo = $scope.gastos/dYs;

                    $scope.gastos = $scope.valor + (gasto_segundo * dDs);

                    $interval(function(){
                        $scope.gastos+= gasto_segundo;
                    },1000);

                }
            }

        }
    }

})();
