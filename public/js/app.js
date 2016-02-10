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
      controller: 'FormCtrl',
      resolve: {
        logincheck: checkLoggedin
      }
    })
    .state('form.welcome', {
            url: '/welcome',
            templateUrl: 'views/form-welcome.html'
        })
        
        // url will be /form/interests
        .state('form.statements', {
            url: '/statements',
            templateUrl: 'views/form-statements.html'
        })
        
        // url will be /form/payment
        .state('form.adultContactInfo1', {
            url: '/adultContactInfo1',
            templateUrl: 'views/form-adultContactInfo1.html'
        })
        .state('form.adultContactInfo2', {
            url: '/adultContactInfo2',
            templateUrl: 'views/form-adultContactInfo2.html'
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