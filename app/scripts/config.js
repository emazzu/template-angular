/*
INSPINIA - Responsive Admin Theme

Inspinia theme use AngularUI Router to manage routing and views
Each view are defined as state.
Initial there are written stat for all view in theme.
*/


//  AUTH0, datos que los provee el dashboard de auth0, levantar un archivo de configuración para el futuro
function config1(authProvider) {

    authProvider.init({
        domain: 'emazzu.auth0.com',
        clientID: 'mZGqpe1FF2C1ptVmzpAR0LV8ba3byYMr'
    })
}


//  emazzu - 17/03/2016 - ruteo
function config2($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/index");

    $stateProvider

        .state('index', {
        abstract: false,
        url: "/index",
        templateUrl: "views/content.html"
    })

        .state('index.login', {
        url: "/login",
        templateUrl: "views/login.html"
    })

        .state('index.404view', {
        url: "/404view",
        templateUrl: "views/404view.html"
    })

        .state('index.401view', {
        url: "/401view",
        templateUrl: "views/401view.html"
    })

        .state('index.maps', {
        url: "/maps",
        templateUrl: "modules/0000/0000view.html"
    })

    //  ruteo dinámico, con esto ahorro 120 caracteres por módulo
        .state('index.dinamic', {
        url: '/:Id',
        templateUrl: function (params) {
            return uri = 'modules/' + params.Id + '/' + params.Id  + 'view' + '.html';
        }

    })
    
}


//  AUT0 - hooks events to check everything as soon as the app starts
function run1(auth) {

    auth.hookEvents();
}


// AUT0 - This events gets triggered on refresh or URL change
function run2($rootScope, auth, store, jwtHelper, $location) {

    $rootScope.$on('$locationChangeStart', function() {
        var token = store.get('token');
        if (token) {
            if (!jwtHelper.isTokenExpired(token)) {
                if (!auth.isAuthenticated) {
                    auth.authenticate(store.get('profile'), token);
                    $location.path('/login');                    
                }
            } else {
                // Either show the login page or use the refresh token to get a new idToken
                $location.path('/login');
            }
        }
    });
    
}


// emazzu - 17/03/2016 - globales para guardar datos de aplicación
function run3($rootScope, $state) {

    $rootScope.$state = $state;

    //    emazzu - define json para tener info en todo momento del módulo seleccionado
    $rootScope.currentModules = "";


    //    emazzu -  define array de json para tener info de los shortCut
    //              agrego maps, porque quiero que siempre este en primera posición
    $rootScope.shortCuts = [{"Id":"0000", "Name":"Google Maps", "Description":"Así, en una página sobre puede haber una palabra.", "Favorite":"0", "Authorized":"false"}];
    
}


// load todas las funciones definidas arriba

angular
    .module('inspinia')
    .config(config1)
    .config(config2)
    .run(run1)
    .run(run2)
    .run(run3)
