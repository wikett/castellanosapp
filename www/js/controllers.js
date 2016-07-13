angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicLoading,$compile) {
    console.log('ChatDetailCtrl...');
  $scope.chat = Chats.get($stateParams.chatId);

 function initialize() {
  console.log('initialize...');
        var myLatlng = new google.maps.LatLng(39.4033607,-3.1269335);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }

      google.maps.event.addDomListener(window, 'load', initialize());

})

.controller('AccountCtrl', function($scope, $ionicPopup) {
    var deploy = new Ionic.Deploy();
  
  // Update app code with new release from Ionic Deploy
  $scope.doUpdate = function() {
    deploy.update().then(function(res) {
      console.log('Ionic Deploy: Update Success! ', res);
    }, function(err) {
      console.log('Ionic Deploy: Update error! ', err);
    }, function(prog) {
      console.log('Ionic Deploy: Progress... ', prog);
    });
  };

  // Check Ionic Deploy for new code
  $scope.checkForUpdates = function() {
    console.log('Ionic Deploy: Checking for updates');
    deploy.check().then(function(hasUpdate) {
      console.log('Ionic Deploy: Update available: ' + hasUpdate);
      $scope.hasUpdate = hasUpdate;
    }, function(err) {
      console.error('Ionic Deploy: Unable to check for updates', err);
    });
  }
  
      $scope.value = false;
            console.log('ContactCtrl started');

            $scope.toggleChange = function() {
                if ($scope.value == false) {
                    $scope.value = true;
                    showAlert();
                    
                } else
                {
                  $scope.value = false;
                  
                }
                    
                console.log('testToggle changed to ' + $scope.value);
            };



             // An alert dialog
 function showAlert() {
   var alertPopup = $ionicPopup.alert({
     title: 'No seas tan bacín!',
     template: 'Alcahueeeteee!'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
    // $scope.value = false;
     //$scope.toggleChange();
   });
 };


});
