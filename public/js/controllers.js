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

app.controller("AdultsController", function($scope, $location, AdultService, $state){
  $scope.adults = AdultService.query();
  $scope.deleteAdult = function(adult){
    adult.$delete(function(adult){
      $scope.adults.splice($scope.adults.indexOf(adult),1);
    });
  };
});

app.controller("NewAdultController", function($scope, $location, AdultService, $state){
  $scope.createAdult = function(adult){
    AdultService.save(adult, function(){
      $state.go('form.adultsInHousehold1');
    });
  };
});

app.controller("AdultController", function($scope, $location, $routeParams, AdultService, $state){
  AdultService.get({id: $routeParams.id}, function(adult){
     $scope.adult = adult;
  }, function(err){
    $state.go('form.adultsInHousehold1');
  });
});


app.controller("EditAdultController", function($scope, $location, $routeParams, AdultService, $state){
  AdultService.get({id: $routeParams.id},function(adult){
    $scope.adult = adult;
  }, function(err){
    $state.go('form.adultsInHousehold1');
  });
  $scope.editAdult = function(adult){
    console.log("This is working!");
    $scope.adult.$update(function(){
      $location.path('/');
    });
  };
});


app.controller("ChildsController", function($scope, $location, ChildService, $state){

  $scope.children = ChildService.query();

  $scope.deleteChild = function(child){
    child.$delete(function(child){
      $scope.children.splice($scope.children.indexOf(child),1);
    });
  };
});

app.controller("NewChildController", function($scope, $location, ChildService, $state){
  $scope.createChild = function(child){
    ChildService.save(child, function(){
      $state.go('form.childrenInHousehold1');
    });
  };
});

app.controller("ChildController", function($scope, $location, $routeParams, ChildService, $state){
  ChildService.get({id: $routeParams.id}, function(child){
    $scope.child = child;
  }, function(err){
    $state.go('form.childrenInHousehold1');
  });
});


app.controller("EditChildController", function($scope, $location, $routeParams, ChildService, $state){
  ChildService.get({id: $routeParams.id},function(child){
    $scope.child = child;
  }, function(err){
    $state.go('form.childrenInHousehold1');
  });
  $scope.editChild = function(child){
    console.log("This is working!");
    $scope.child.$update(function(){
      $state.go('form.childrenInHousehold1');
    });
  };
});