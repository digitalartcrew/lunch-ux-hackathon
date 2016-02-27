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



  $scope.step1 = function() {
      $scope.widthbar = "width: 10%";
      $scope.step = "";
      $scope.pstatus = "progress-bar-danger"
  }

   $scope.step2 = function() {
      $scope.widthbar = "width: 20%";
      $scope.step = "";
      $scope.pstatus = "progress-bar-danger"
  }

   $scope.step3 = function() {
      $scope.widthbar = "width: 30%";
      $scope.step = "Step 1 of 7";
      $scope.pstatus = "progress-bar-warning"
  }

   $scope.step4 = function() {
      $scope.widthbar = "width: 40%";
      $scope.step = "Step 2 of 7";
      $scope.pstatus = "progress-bar-warning"
  }

    $scope.step5 = function() {
      $scope.widthbar = "width: 50%";
      $scope.step = "Step 3 of 7";
      $scope.pstatus = "progress-bar-info"
  }

    $scope.step6 = function() {
      $scope.widthbar = "width: 60%";
      $scope.step = "Step 4 of 7";
      $scope.pstatus = "progress-bar-info"
  }

    $scope.step7 = function() {
      $scope.widthbar = "width: 70%";
      $scope.step = "Step 5 of 7";
      $scope.pstatus = "progress-bar-info"
  }

    $scope.step8 = function() {
      $scope.widthbar = "width: 85%";
      $scope.step = "Step 6 of 7";
      $scope.pstatus = "progress-bar-success"
  }

    $scope.step9 = function() {
      $scope.widthbar = "width: 100%";
      $scope.step = "Step 7 of 7";
      $scope.pstatus = "progress-bar-success"
  }

});

app.controller("WelcomeCtrl", function($rootScope, $scope, $http, $location, $state) {
  $scope.formData = {};
  $scope.title = "Welcome";
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
      console.log('Almost there!');
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
   $scope.createAdult = function(adult){
    AdultService.save(adult, function(){
      $state.go('form.adultsInHousehold1');
    });
  };
  $scope.adults = AdultService.query();
  $scope.deleteAdult = function(adult){
    adult.$delete(function(adult){
      $scope.adults.splice($scope.adults.indexOf(adult),1);
    });
  };
});

app.controller("MainAdultController", function($scope, $location, AdultService, $state){
  $scope.createAdult = function(adult){
    AdultService.save(adult, function(){
      $state.go('form.adultContactInfo2');
    });
  };
});

app.controller("AssistCtrl", function($scope, $location, $state,CaseNumberService){
   $scope.addCaseNumber = function(casenumber){
    CaseNumberService.save(casenumber, function(){
      console.log(casenumber)
    });
  };

    $scope.benefit1 = false;
    $scope.benefit2 = false;
    $scope.benefit3 = false;
    $scope.casenumber;

    $scope.hasBenefits = function(benefit){
      if($scope.benefit1 || $scope.benefit2 || $scope.benefit3){
        $state.go('form.childrenInHousehold1');
        console.log($scope.casenumber);
      }else{
        $state.go('form.childStatus1');
      };
 }  

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


app.controller("ChildrenController", function($scope, $location, ChildService, $state){
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

  $scope.createChild2 = function(child){
    ChildService.save(child, function(){
      $state.go('form.childrenInHousehold1Skip');
    });
  };
});

app.controller("ChildController", function($scope, $location, $routeParams, ChildService, $state){
  ChildService.get({id: $routeParams.id}, function(child){
    $scope.child = child;
  }, function(err){
    $location.path('/');
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

app.controller("ReviewController", function($scope, $location, AdultService, ChildService, CaseNumberService, $state){
  $scope.adults = AdultService.query();
  $scope.children = ChildService.query();
  $scope.casenumbers = CaseNumberService.query();

  $scope.deleteAdult = function(adult){
    adult.$delete(function(adult){
      $scope.adults.splice($scope.adults.indexOf(adult),1);
    });
  };

 $scope.deleteChild = function(child){
    child.$delete(function(child){
      $scope.children.splice($scope.children.indexOf(child),1);
    });
  };


});


app.controller("ChildStatusController", function($scope, $location, $state){
  $scope.childStatus = function(){
    if ($scope.fosterchild || $scope.runaway || $scope.homeless || $scope.headstart){
      $state.go('form.childrenInHousehold1Skip');
    }else if ($scope.fosterchildsome || $scope.runawaysome || $scope.homelesssome || $scope.headstartsome){
      $state.go('form.childrenInHousehold1');
    }else{
      $state.go('form.childrenInHousehold1');
    }
  };
});

//SIG CONTROLLER
app.controller('SignatureController',function($scope) {

    
    $scope.testAction = function(svg){
      $scope.items.push({});
      $scope.hash = 'data:' + svg[0] + "," + svg[1];
      var i = new Image();
      i.src = "data:" + svg[0] + "," + svg[1];
      console.log("THIS", svg[0]);
      $(i).appendTo($("body")); // append the image (SVG) to DOM.
    };

    var datapair = ['image/jsignature;base30'];
    datapair[1] = 'base30,5I0Z22221_4A788a84_3Uefdb8ba9430Z5bedd984631Y69fdhde796_4EZ1220000Y147578b76421Z1249542211000_8uZ2110Ya5552100Z3634Y7666733100Z12Y32212231004544100000Z1000Y1364845230Z61Y1645a75311_4O34462000Z446620Y221Z210132Y86667Z675443Y346520Z2656a575Y8a6583310Z333450Y5431000Z2444_aw567743_4LZ121212_gE0000000_3S65a5875_fK68a97574Z1678754Y79aa65510Z588dbca432Y6gjgcb84_3W00000003423332200000034753310Z2532423312112_iH00045111122334320053831Z1Y334323200400322354221Z7211Y856653421Z1111212287400Y16bceb67_4H67620Z6674Y75431Z26750Y232552Z35234Y4551Z55Y35331Z45a7Y34440Z12322144Y4988866431Z5755522000';
    $scope.customSignature = datapair;
});


