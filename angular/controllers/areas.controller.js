/**
 * Created by Josue on 20/07/2017.
 */

(function(){

    angular.module('Minhacidade')
        .controller('areasController', areasController )
        .controller('detailsAreaController', detailsAreaController)

    areasController.$inject = ['$scope','areaService', '$mdDialog'];
    detailsAreaController.$inject = ['$scope','areaService', '$mdDialog', 'detailID'];

    function areasController($scope, areaService, $mdDialog) {
        var vm = this;
        $scope.showTabDialog = showTabDialog;
        $scope.valorTotal =0;
        vm.gastometros = [];

        areaService.getDadosGastometro().then(function(response){
            console.log(response.data.gastometro);
            angular.forEach(response.data.gastometro, function(value){
                vm.gastometros.push(value);
                $scope.valorTotal += value.pago;
            });
        });



        function showTabDialog(ev,id) {
            console.log(id);
            return $mdDialog.show({
                controller: detailsAreaController,
                controllerAs: 'vm',
                templateUrl: 'partials/areas/details.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals : {
                    detailID : id
                },
                clickOutsideToClose:true
            });
        }
    }

    function detailsAreaController($scope, areaService, $mdDialog,detailID){
        var vm = this;
        vm.detail = [];
        $scope.year = '';

        $scope.labels = [2014, 2015, 2016, 2017];
        $scope.data = [];

        $scope.optionsChart = {
            datasets: [{
                data: $scope.data,
                backgroundColor: 'rgb(0, 176, 255)',
                borderColor: 'rgb(0, 176, 255)',
                fill: false
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

        $scope.areas = [];
        $scope.data = pegarDataAnos(2014,2017);

        function pegarDataAnos(ano_inicial, ano_final){
            var dados = [];
            var dif = ano_final - ano_inicial;
            var static_ano_inicio = ano_inicial;

            for (var i = 0; ano_final > i; i++) {
               dados.push(0);
            };

            showDetail().then(function(response){
                for(var i = 0; i <= dif; i++){
                    areaService.getYear(ano_inicial, response[0].idArea)
                        .then(function (response) {
                            dados[response.data.gastometro[0].ano - static_ano_inicio] = response.data.gastometro[0].pago;
                        });
                    ano_inicial++;
                }
            });
            return dados;
        }


        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        $scope.hoje = dd+'/'+mm+'/'+yyyy;


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
            $scope.promise = $timeout(function () {}, 2000);
        }

        $scope.hide = hide;
        $scope.cancel = cancel;
        $scope.answer = answer;

        activate();



        function activate() {
            return showDetail().then(function() {});
        };


        function showDetail() {
            return areaService.getDadosArea(detailID).then(function(response) {
                return vm.detail = response.data.gastometro;
            });
        };

        $scope.$watch('year', function() {
            if($scope.year){
                showDetail().then(function(response){
                    areaService.getYear($scope.year, response[0].idArea).then(function (response) {
                        return vm.detail = response.data.gastometro;
                    });
                });
            }
        });

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