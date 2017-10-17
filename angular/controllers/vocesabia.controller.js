/**
 * Created by Josue on 20/07/2017.
 */
'use strict';

(function(){

    angular.module('Minhacidade')
        .controller('vocesabiaController', vocesabiaController )
        .controller('detailsVoceSabaController', detailsVoceSabaController)

    vocesabiaController.$inject = ['$scope','areaService', '$mdDialog'];
    detailsVoceSabaController.$inject = ['$scope','areaService', '$mdDialog', 'detailID'];

    function vocesabiaController($scope, areaService, $mdDialog) {

        var vm = this;
        vm.vocesabia = [];

        $scope.showTabDialog = showTabDialog;

        function showTabDialog(ev,id) {

            return $mdDialog.show({
                controller: detailsVoceSabaController,
                controllerAs: 'vm',
                templateUrl: 'partials/vocesabia/details.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals : {
                    detailID : id
                },
                clickOutsideToClose:true
            });
        }

    }

    function detailsVoceSabaController($scope, areaService, $mdDialog,detailID){
        var vm = this;
        vm.detail;

        var fullDataMoney = [[17510609.73, 16573704.74, 5139790.74, 4559132.78], [2123516.64, 6092879.05, 3357845.69, 2392031.46]];
        var fullDataYears = [[2014, 2015, 2016, 2017], [2013, 2014, 2015, 2016]];
        
        $scope.detail = [];

        for (var i = 0;fullDataMoney[detailID].length > i; i++) {
            var aux = {ano:fullDataYears[detailID][i], empenhado:fullDataMoney[detailID][i]};
            $scope.detail.push(aux);
            console.log($scope.detail)
        };

        $scope.labels = fullDataYears[detailID];
        $scope.data = fullDataMoney[detailID];

        $scope.options = {
            datasets: [{
                data: $scope.data,
                backgroundColor: 'rgb(0, 176, 255)',
                borderColor: 'rgb(0, 176, 255)',
                fill: true
            }],
            legend: {
                display: false
            },
            responsive : true,
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)"
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)"
                    }
                }]
            }
        };

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

        $scope.hide = hide;
        $scope.cancel = cancel;
        $scope.answer = answer;

        activate();

        function activate() {
            return showDetail()
                .then(function() {
                    console.log('Activated Event View');
                });
        }


        function showDetail() {
            return areaService.getDadosArea(detailID)
                .then(function(response) {
                    console.log(response.data.gastometro);
                    return vm.detail = response.data.gastometro;
                });
        };

        function hide() {
            return $mdDialog.hide();
        };

        function cancel() {
            return $mdDialog.cancel();
        };

        function answer(answer) {
            return $mdDialog.hide(answer);
        };
    }

})();