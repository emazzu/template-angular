/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written stat for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/index");

    $stateProvider

        .state('index', {
        abstract: false,
        url: "/index",
        templateUrl: "views/content.html"
    })

        .state('index.404view', {
        url: "/404view",
        templateUrl: "views/404view.html"
    })

        .state('index.401view', {
        url: "/401view",
        templateUrl: "views/401view.html"
    })

        .state('index.main', {
        url: "/main",
        templateUrl: "views/main.html",
        data: { pageTitle: 'Example view' }
    })

        .state('index.maps', {
        url: "/maps",
        templateUrl: "modules/0000/0000view.html"
    })

    //        ruteo dinámico, con esto ahorro por módulo 120 caracteres
        .state('index.dinamic', {
        url: '/:Id',
        templateUrl: function (params) {
            return uri = 'modules/' + params.Id + '/' + params.Id  + 'view' + '.html';
        }
    })

}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {

    $rootScope.$state = $state;

    //    define json para tener info en todo momento del módulo seleccionado
    $rootScope.currentModules = "";

    //    define json para tener info en todo momento del usuario
    $rootScope.currentUser = {"picture": "", "name": "Eduardo Mazzucchelli", "userName": "xmazzuce", "updated": "23.11.2016", "version": "2016.03.09"};

    //    define array de json para tener info de los shortCut
    $rootScope.shortCuts = [{"Id":"0000", "Name":"Google Maps", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"}];


    //  show estados definidos
    //console.log(JSON.stringify($state.get()));
});



/*    .run(['$q', '$rootScope', '$state', '$http', function($q, $rootScope, $state, $http) {

        $http
            .get("dinamicRouter.json")
            .success(function(data) {
            angular.forEach(data, function(value, key) {

                var state = {
                    "url": value.url,
                    "parent": value.parent,
                    templateUrl: value.templateUrl,
                    abstract: value.abstract,
                    data: value.data
                };

                 emazzu - 07/03/2016 - deshabilitado, es para cuando el JSON viene con una definición de varias views anidadas

            angular.forEach(value.views, function(view) {

                state.views[view.name] = {
                    templateUrl: view.templateUrl,
                    data: view.data
                };
            });



                //$stateProviderRef.state(value.name, state);
            });

            // Configures $urlRouter's listener *after* your custom listener
            console.log(JSON.stringify($state.get()));
            //$state.go("index");
        });

    }]);*/
