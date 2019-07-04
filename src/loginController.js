
var loginController = function($scope, $http, $window) {

    $scope.onLogin = function (user) {

        // { observe: 'response' }
        $http.post('http://localhost:8080/login', user).then(function (response) {

            var jwtToken = response.headers('Authorization');
            localStorage.setItem('token', jwtToken)
            $window.location.href = '#!/movies';
        });
    };
}

export default loginController;
