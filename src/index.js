import angular from 'angular'
import AuthService from './services/auth.service'
import 'angular-route';
import 'bootstrap';
import 'popper.js';
import 'jquery'
// import {list} from './loginController';
import routes from './routes';


var app = angular.module('app', ['ngRoute']);



app.config(['$routeProvider', routes]);

app.service('AuthService', AuthService);

// app.controller('loginController', ['$scope', '$http', '$window', '$log'], loginController);