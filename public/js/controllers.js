app.controller("NavCtrl", function($rootScope, $scope, $http, $location) {
  $scope.logout = function() {
    $http.post("/logout")
      .success(function() {
        $rootScope.currentUser = null;
        $location.url("/login");
      });
  }
});

app.controller("LunchCtrl", function($rootScope, $scope, $http, $location) {
  $scope.logout = function() {
    $http.post("/logout")
      .success(function() {
        $rootScope.currentUser = null;
        $location.url("/login");
      });
  }
});

app.controller("SignUpCtrl", function($scope, $http, $rootScope, $location) {
   $scope.resources = [
            'http://techslides.com/demos/sample-videos/small.webm',
            '*.ogv',
            '*.mp4',
            '*.swf'
        ];
        $scope.poster = 'http://placehold.it/1280x720';
        $scope.fullScreen = true;
        $scope.muted = true;
        $scope.zIndex = '22';
        $scope.playInfo = {};
        $scope.pausePlay = true;
  $scope.signup = function(user) {

    if (user.password == user.password2) {
      $http.post('/signup', user)
        .success(function(user) {
          $rootScope.currentUser = user;
          $location.url("/form");
        });
    }
  }
});

app.controller("LoginCtrl", function($location, $scope, $http, $rootScope) {
  $scope.resources = [
            'http://techslides.com/demos/sample-videos/small.webm',
            '*.ogv',
            '*.mp4',
            '*.swf'
        ];
        $scope.poster = 'http://placehold.it/1280x720';
        $scope.fullScreen = true;
        $scope.muted = true;
        $scope.zIndex = '22';
        $scope.playInfo = {};
        $scope.pausePlay = true;

  $scope.login = function(user) {
    $http.post('/login', user)
      .success(function(response) {
        $rootScope.currentUser = response;
        $location.url("/form");
      });
  }
});