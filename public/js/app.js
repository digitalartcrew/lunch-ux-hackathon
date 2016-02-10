var app = angular.module("LunchApp", ["ngVidBg", "ngAnimate","ui.router"]);

app.config(function($stateProvider,$urlRouterProvider) {
  
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html',
      controller: 'LoginCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'views/signup.html',
      controller: 'SignUpCtrl'
    })
    .state('form', {
      url: '/form',
      templateUrl: 'views/form.html',
      resolve: {
        logincheck: checkLoggedin
      }
    })
  $urlRouterProvider.otherwise('login');
});

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
  var deferred = $q.defer();

  $http.get('/loggedin').success(function(user) {
    $rootScope.errorMessage = null;
    //User is Authenticated
    if (user !== '0') {
      $rootScope.currentUser = user;
      deferred.resolve();
    } else { //User is not Authenticated
      $rootScope.errorMessage = 'You need to log in.';
      deferred.reject();
      $location.url('/login');
    }
  });
  return deferred.promise;
}