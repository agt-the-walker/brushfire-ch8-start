angular.module('brushfire').controller('navPageController', ['$location', '$scope', '$http', 'toastr', function($location, $scope, $http, toastr) {

  //Set-up loading state
  $scope.loginForm = {};

  $scope.me = window.SAILS_LOCALS.me;
  
  // Submit request to Sails.
    $http.put('/login', {
        email: $scope.loginForm.login,
        username: $scope.loginForm.login,
        password: $scope.loginForm.password
      })
      .then(function onSuccess() {
        // Redierct the page now that we've been logged in.
        window.location = '/videos';
        // window.location = '/';
        // toastr.success('We have a match!', 'Success', {closeButton: true});
      })
      .catch(function onError(sailsResponse) {

        // Handle known error type(s).
        // Invalid username / password combination.
        if (sailsResponse.status === 400 || 404) {
          // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
          //
          toastr.error('Invalid email or username/password combination.', 'Error', {
            closeButton: true
          });
          return;
        }

        toastr.error('An unexpected error occurred, please try again.', 'Error', {
          closeButton: true
        });
        return;

      })
      .finally(function eitherWay() {
        $scope.loginForm.loading = false;
      });
  };
}]);