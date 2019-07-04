import loginController from './loginController';
import {listMovies, addMovie} from './moviesController';

export default function($routeProvider, $httpProvider) {
    // $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
    // $httpProvider.defaults.cache = false;
    // $logProvider.debugEnabled(true);
    $routeProvider.
        when('/login', {
            templateUrl: 'views/login.html',
            controller: loginController
        }).
        when('/movies', {
            templateUrl: 'views/movies.html',
            controller: listMovies
        }).
        when('/add', {
            templateUrl: 'views/add.html',
            controller: addMovie
        }).
        // when('/movies/:movieId', {
        //     template: '<phone-detail></phone-detail>'
        // }).
        otherwise('/');
}
