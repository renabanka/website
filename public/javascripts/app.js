angular.module('renaBankaPortfolio', [ 'ngRoute'
]).config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {



        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false // good for anything IE9+
        });

        $routeProvider
            .when('/', {
                templateUrl: 'ngViews/home.html',
                controller: 'HomeCtrl'
            })
            .when('/about', {
                templateUrl: 'ngViews/about.html',
                controller: 'AboutCtrl'
            })

            .when('/projects', {
                templateUrl: 'ngViews/development.html',
                controller: 'DevelopmentCtrl'

            })

            .when('/process', {
                templateUrl: 'ngViews/process.html',
                controller: 'ProcessCtrl'

            })
            .when('/design', {
                templateUrl: 'ngViews/design.html',
                controller: 'DesignCtrl'

            });


        $routeProvider.otherwise({ redirectTo: '/' });
    }
]);

