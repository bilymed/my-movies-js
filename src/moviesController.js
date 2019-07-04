
export function addMovie($scope, AuthService) {
    AuthService.saveToken();
    // let auth = new AuthService();
    // AuthService.saveToken();

    $scope.add = function (movie) {
        // let auth = new AuthService();
        AuthService.saveToken();
        console.log(movie);
    };

}

export function listMovies($scope, $http, $window) {

    if ($scope.jwtToken == null) {
        $scope.jwtToken = localStorage.getItem('token');
    }

    $http({
        url: 'http://localhost:8080/movies',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': $scope.jwtToken
        }
    }).then(function (response) {
        $scope.movies = response.data;
        // console.log(response);
    }, function (reason) {
        localStorage.removeItem('token');
        $window.location.href = '#!/login';
    });

};


// console.log(angular.toJson(l));
