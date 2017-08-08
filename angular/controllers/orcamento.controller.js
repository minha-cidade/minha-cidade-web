/**
 * Created by Josue on 19/07/2017.
 */
'use strict';

(function(){

    angular.module('Minhacidade')
        .controller('orcamentoController', orcamentoController )

    orcamentoController.$inject = ["$scope","$mdEditDialog", "$q", "$timeout", "areaService"];

    function orcamentoController($scope, $mdEditDialog, $q, $timeout, areaService) {

        // $scope.labels = ["Saúde", "Educação", "Administração"];
        // $scope.data = [22101,1251,2221.11];

        $scope.labels = [];
        $scope.data = [];

        $scope.optionsChart = {
            legend: {
                labels: {
                    display: true
                },
                display: true
            }
        };

        this.myDate = new Date();
        this.isOpen = false;

        $scope.areas = [{area:"Administração - 10,3 %",
empenhado:265920759},
{area:"Segurança Pública - 0.95 %",
empenhado:24662937},
{area:"Assistência Social - 1.31 %",
empenhado:33808700},
{area:"Previdência Social - 9.04 %",
empenhado:233341919},
{area:"Saúde - 34.92 %",
empenhado:900531814},
{area:"Educação - 16.16 %",
empenhado:416950010},
{area:"Cultura - 0.70 %",
empenhado:18217000},
{area:"Urbanismo - 9.67 %",
empenhado:249420207},
{area:"Habitação - 5.70 %",
empenhado:147003000},
{area:"Gestão Ambiental - 0.72 %",
empenhado:18768500},
{area:"Ciência e Tecnologia - 0.10 %",
empenhado:2559040},
{area:"Comércio e Serviços- 0.27 %",
empenhado:7160500},
{area:"Comunicações - 0.54 %",
empenhado:13965000},
{area:"Transporte - 2.21 %",
empenhado:57064000},
{area:"Encargos Especiais - 3.29 %",
empenhado:85067579},
{area:"Outros - 4,04 %",
empenhado:104397155}];
        /*$scope.areas = [];

        areaService.getDadosGastometro().then(function(response){
            angular.forEach(response.data.gastometro, function(value){
                console.log(value);
                $scope.labels.push( value.area);
                $scope.data.push((value.empenhado));
                $scope.areas.push(value);
            });
        });*/


        $scope.selected = [];
        $scope.limitOptions = [5, 10, 15];

        $scope.options = {
            rowSelection: false,
            multiSelect: false,
            autoSelect: false,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: false,
            limitSelect: false,
            pageSelect: false
        };

        $scope.query = {
            order: 'area',
            limit: 5,
            page: 1
        };

        $scope.toggleLimitOptions = function () {
            $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
        };

        $scope.loadStuff = function () {
            $scope.promise = $timeout(function () {
                // loading
            }, 2000);
        }

        $scope.logItem = function (item) {
            console.log(item.name, 'was selected');
        };

        $scope.logOrder = function (order) {
            console.log('order: ', order);
        };

        $scope.logPagination = function (page, limit) {
            console.log('page: ', page);
            console.log('limit: ', limit);
        }
    }
})();

