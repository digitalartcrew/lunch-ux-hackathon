app.controller("NavCtrl", function($rootScope, $scope, $http, $location, $state) {
  $scope.logout = function() {
    $http.post("/logout")
      .success(function() {
        $rootScope.currentUser = null;
        $location.url("/login");
      });
  };
});

app.controller("LunchCtrl", function($rootScope, $scope, $http, $location, $state) {
  $scope.logout = function() {
    $http.post("/logout")
      .success(function() {
        $rootScope.currentUser = null;
        $location.url("/login");
      });
  };
});

app.controller("FormCtrl", function($rootScope, $scope, $http, $location, $state) {
  $scope.formData = {};
  $scope.title = "Test Header"
});

app.controller("SignUpCtrl", function($scope, $http, $rootScope, $location, $state) {
   // $scope.resources = [
   //          '../img/lime.png',
   //          '*.ogv',
   //          '*.mp4',
   //          '*.swf'
   //      ];
        $scope.poster = '../img/fruit.jpg';
        $scope.fullScreen = true;
        $scope.muted = true;
        $scope.zIndex = '22';
        $scope.playInfo = {};
        $scope.pausePlay = true;
  $scope.signup = function(user) {

    if (user.password == user.password2) {
      console.log('Almost there!')
      $http.post('/signup', user)
        .success(function(user) {
          $rootScope.currentUser = user;
         $state.go('form.welcome');
        });
    }
  };
});

app.controller("LoginCtrl", function($location, $scope, $http, $rootScope, $state) {
  // $scope.resources = [
  //           './img/lime.png',
  //           '*.ogv',
  //           '*.mp4',
  //           '*.swf'
  //       ];
        $scope.poster = '../img/fruit.jpg';
        $scope.fullScreen = true;
        $scope.muted = true;
        $scope.zIndex = '22';
        $scope.playInfo = {};
        $scope.pausePlay = true;

  $scope.login = function(user) {
    $http.post('/login', user)
      .success(function(response) {
        $rootScope.currentUser = response;
        $state.go('form.welcome');
      });
  };
});

app.controller("AdultsController", function($scope, $location, AdultService){

  $scope.adults = AdultService.query();

  $scope.deleteAdult = function(adult){
    adult.$delete(function(adult){
      $scope.adults.splice($scope.adults.indexOf(adult),1);
    });
  };
});

app.controller("NewAdultController", function($scope, $location, AdultService){
  $scope.createAdult = function(adult){
    AdultService.save(adult, function(){
      $location.path('/');
    });
  };
});

app.controller("AdultController", function($scope, $location, $routeParams, AdultService){
  AdultService.get({id: $routeParams.id}, function(adult){
     $scope.adult = adult;
  }, function(err){
    $location.path('/');
  });
});


app.controller("EditAdultController", function($scope, $location, $routeParams, AdultService){
  AdultService.get({id: $routeParams.id},function(adult){
    $scope.adult = adult;
  }, function(err){
    $location.path('/');
  });
  $scope.editAdult = function(adult){
    console.log("This is working!");
    $scope.adult.$update(function(){
      $location.path('/');
    });
  };
});


app.controller("ChildsController", function($scope, $location, ChildService){

  $scope.children = ChildService.query();

  $scope.deleteChild = function(child){
    child.$delete(function(child){
      $scope.children.splice($scope.children.indexOf(child),1);
    });
  };
});

app.controller("NewChildController", function($scope, $location, ChildService){
  $scope.createChild = function(child){
    childService.save(child, function(){
      $location.path('/');
    });
  };
});

app.controller("ChildController", function($scope, $location, $routeParams, ChildService){
  childService.get({id: $routeParams.id}, function(child){
    $scope.child = child;
  }, function(err){
    $location.path('/');
  });
});


app.controller("EditChildController", function($scope, $location, $routeParams, ChildService){
  childService.get({id: $routeParams.id},function(child){
    $scope.child = child;
  }, function(err){
    $location.path('/');
  });
  $scope.editChild = function(child){
    console.log("This is working!");
    $scope.child.$update(function(){
      $location.path('/');
    });
  };
});