/**
 * Created by Josue on 30/07/2017.
 */

'use strict';

(function(){
    angular
        .module("Minhacidade")
        .directive("seticons", seticons);


    seticons.$inject = ['$parse', '$http', '$sce', '$interval'];

    function seticons($parse, $http, $sce, $interval){
        return {
            restrict: 'AE',
            scope: {
                "type": "@type",
                "area": "@area"
            },
            link: function($scope, iElement, iAttrs){

                switch ($scope.type){
                    case "Geral":
                        iAttrs.ngSrc = "images/icons/ic_av_timer_white_24px.svg";
                        break;
                    case "assistência social":
                        iAttrs.ngSrc = "images/icons/ic_person_add_black_24px.svg";
                        break;
                    case "saúde":
                        iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                        break;
                    case "educação":
                        iAttrs.ngSrc = "images/icons/ic_book_black_24px.svg";
                        break;
                    case "desporto e lazer":
                        iAttrs.ngSrc = "images/icons/ic_pool_black_18px.svg";
                        break;
                    case "encargos especiais":
                        iAttrs.ngSrc = "images/icons/ic_star_rate_black_18px.svg";
                        break;
                    case "segurança pública":
                        iAttrs.ngSrc = "images/icons/ic_security_black_24px.svg";
                        break;
                    case "administração":
                        iAttrs.ngSrc = "images/icons/ic_perm_identity_black_24px.svg";
                        break;
                    case "judiciaria":
                        iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                        break;
                    case "gestão ambiental":
                        iAttrs.ngSrc = "images/icons/ic_nature_people_black_18px.svg";
                        break;
                    case "habitação":
                        iAttrs.ngSrc = "images/icons/ic_location_city_black_24px.svg";
                        break;
                    case "direitos da cidadania":
                        iAttrs.ngSrc = "images/icons/ic_supervisor_account_black_24px.svg";
                        break;
                    case "energia":
                        iAttrs.ngSrc = "images/icons/ic_flash_on_black_24px.svg";
                        break;
                    case "saneamento":
                        iAttrs.ngSrc = "images/icons/ic_gps_not_fixed_black_24px.svg";
                        break;
                    case "previdência social":
                        iAttrs.ngSrc = "images/icons/ic_accessibility_black_24px.svg";
                        break;
                    case "urbanismo":
                        iAttrs.ngSrc = "images/icons/ic_home_black_24px.svg";
                        break;
                    case "transporte":
                        iAttrs.ngSrc = "images/icons/ic_directions_bus_black_24px.svg";
                        break;
                    case "trabalho":
                        iAttrs.ngSrc = "images/icons/ic_work_black_24px.svg";
                        break;
                    case "cultura":
                        iAttrs.ngSrc = "images/icons/ic_insert_emoticon_black_24px.svg";
                        break;
                    case "comunicações":
                        iAttrs.ngSrc = "images/icons/ic_insert_emoticon_black_24px.svg";
                        break;
                    case "comércio e serviços":
                        iAttrs.ngSrc = "images/icons/ic_local_atm_black_24px.svg";
                        break;
                    case "ciência e tecnologia":
                        iAttrs.ngSrc = "images/icons/ic_device_hub_black_24px.svg";
                        break;
                    case "Agricultura":
                        iAttrs.ngSrc = "images/icons/ic_enhanced_encryption_black_24px.svg";
                        break;
                    default:
                        console.log("nenhuma dos casos");
                }
            }

        }
    }

})();
