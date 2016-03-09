/**
 * INSPINIA - Responsive Admin Theme
 *
 */


/*
    MenuCtrl - controller
*/
function NavigationCtrl($scope, $state, $rootScope) {


    $scope.menu = [
        {"Id":"1", "Name":"Wells", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2", "Name":"Survey Limits", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"1000", "Name":"Data", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"1001", "Name":"Wells", "Description":"Así, en una página sobre puede haber una palabraAsí, en una página sobre puede haber una palabra.Así, en una página sobre puede haber una palabra.Así, en una página sobre puede haber una palabra..", "Favorite":"0", "Authorized":"true"},
        {"Id":"1002", "Name":"Well Status", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"true"},
        {"Id":"1003", "Name":"Well Groups", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"true"},
        {"Id":"1004", "Name":"Workover", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"1005", "Name":"Formations - VDS", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"1006", "Name":"Fluids", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2000", "Name":"Tables", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"1", "Authorized":"false"},
        {"Id":"2001", "Name":"Wells", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"1", "Authorized":"false"},
        {"Id":"2002", "Name":"Types", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"1", "Authorized":"false"},
        {"Id":"2003", "Name":"Blocks", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"1", "Authorized":"true"},
        {"Id":"2004", "Name":"Chroma", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"1", "Authorized":"true"},
        {"Id":"2005", "Name":"Basins", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"1", "Authorized":"false"},
        {"Id":"2006", "Name":"Districts", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"1", "Authorized":"true"},
        {"Id":"2007", "Name":"Test", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"1", "Authorized":"false"},
        {"Id":"2008", "Name":"Operations", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"1", "Authorized":"false"},
        {"Id":"2009", "Name":"Fluid", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"1", "Authorized":"false"},
        {"Id":"2052", "Name":"Reports - Categories", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2053", "Name":"Reports - Sub categories", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2054", "Name":"Reports - Locations", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2055", "Name":"Data Media - Authors", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2056", "Name":"Data Media - Types", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2057", "Name":"Logs - Types", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2058", "Name":"Logs - Companies", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2059", "Name":"Workover - Jobs", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2060", "Name":"Workover - Objectives", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2061", "Name":"Workover - Several", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2062", "Name":"Workover - Types", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2063", "Name":"Reference for Import", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2064", "Name":"Tanks", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2065", "Name":"Tanks Master", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"2066", "Name":"Manufacturers Master", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3000", "Name":"Queries", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3002", "Name":"EUR", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3004", "Name":"Last Capitulo IV production", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3009", "Name":"Production Data", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3010", "Name":"Capitulo IV", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3011", "Name":"Tests", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3012", "Name":"Inj Rate Test", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3013", "Name":"DownTime", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3014", "Name":"Pulling", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3015", "Name":"DynaPack", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3016", "Name":"Dynapack Measures", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3017", "Name":"Workover Proposal", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3021", "Name":"Export Gas Rate Test plus test number", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3023", "Name":"Formations with Tests", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3024", "Name":"Capitulo IV (Secretaría de Energía - Pozos)", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3025", "Name":"Capitulo IV (Secretaría de Energía - Producción)", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3026", "Name":"Capitulo IV by Area", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3027", "Name":"Export Test to Intervals", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3028", "Name":"Water Balance", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3029", "Name":"Water Balance AVG", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3030", "Name":"Capitulo IV (IAPG - Pozos)", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3031", "Name":"DynaPack FOP and Oil Rate Test", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3032", "Name":"DynaPack FOP - Last and Oil Rate Test", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3033", "Name":"Capitulo IV", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3034", "Name":"Dynapack FOP", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3035", "Name":"Dynapack Superficie", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3036", "Name":"Dynapack Varillas", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3037", "Name":"Capitulo IV (Posible Error)", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3038", "Name":"Sesco (Secretaría de Energía)", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3039", "Name":"P1 - Produccion de Petróleo", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3040", "Name":"Oil Rate Test", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3041", "Name":"Last Oil Rate Test", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3042", "Name":"Capitulo IV (Secretaria >= 2010)", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3043", "Name":"Formations from OW - Format SAHARA", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3044", "Name":"New Wells G&G", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"3045", "Name":"DST from OW - format SAHARA", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4000", "Name":"Reports", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4001", "Name":"Cummulative Production", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4002", "Name":"Formations and Reservoirs", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4004", "Name":"Tests", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4005", "Name":"Interpreted Fluids", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4006", "Name":"Side Wall Core", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4007", "Name":"Production Chart", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4008", "Name":"Box", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4011", "Name":"Report", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4014", "Name":"Workover Proposal", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4016", "Name":"Well Header", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4017", "Name":"Prospect to Drilling", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4019", "Name":"Locations", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4020", "Name":"New Well Proposal", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4021", "Name":"Prospect Inventory", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4024", "Name":"New Well Proposal - Operations", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4026", "Name":"Ficha de Pozo", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"4027", "Name":"Avanzada Well Status", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"5000", "Name":"Procedures", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"5001", "Name":"Copy Formations to Workover Proposal", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"},
        {"Id":"8000", "Name":"nombre_opción", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"}

    ]


    $scope.authorized = function(item) {

        //        mark como favorita la opción seleccionada
        for(var i = 0; i < $scope.menu.length; i++ ) {
            if ($scope.menu[i].Id == item.Id) {
                $scope.menu[i].Authorized = Math.round(Math.random());
                break;  
            }
        }

    };


    $scope.selectedModule = function(item) {

        //        clean última busqueda
        $scope.searchModule = "";


        //        assing módulo selecionado a json global para tener acceso desde cualquier controlador y vista
        $rootScope.currentModule = item;
        

        //        mark como favorita la opción seleccionada
        for(var i = 0; i < $scope.menu.length; i++ ) {
            if ($scope.menu[i].Id == item.Id) {
                $scope.menu[i].Favorite = "1";
                break;
            }
        }


        if (item.Authorized == false) {
            $state.go("index.401view");
            return
        }


        //        render vista dinamica, con módulo como parametro
        //        pasa por then por OK, pasa por function por ERROR
        //        como es dinamico, puede ser que me haya olvidado el html
        $state.go("index.dinamic", {Id: item.Id}).then(function() {
        }, function() {
            $state.go("index.404view")
        });

    };


};


angular
    .module('inspinia')
    .controller('NavigationCtrl', NavigationCtrl)



//        $state.go("index.dinamic", {Id:item.Id}, {Name: item.Name}, {Description: item.Description});
//$state.go( "index.dinamic", {Id: item.Id}, {myParams: [{Name: item.Name}, {Description: item.Description}]} );
