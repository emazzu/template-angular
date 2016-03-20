/*
    emazzu - 17/03/2016
    Template basado en INSPINIA y personalizado
    Función que se autoejecuta, para que todos los módulos estes visibles en la app

    Esta personalizado para ser un esqueleto para cualquier aplicación, cuenta con las librerías:
    
    Boostrap Inspinia   para la interfaz
    Auth0               para autenticación
    autorización        para autorización como servicio
    ui-route            para ruteo
    ui-grid             para usar una grilla en caso de ser necesaria
*/
(function () {
    angular.module('inspinia', [
        'ui.router',                // Routing
        'ui.bootstrap',             // Bootstrap
        'auth0',                    // auth0
        'angular-storage',          // auth0
        'angular-jwt'               // auth0
    ])
})();
