angular.module('appRoutes', []).config([
 '$stateProvider',
 '$urlRouterProvider',
 '$locationProvider',
 function($stateProvider, $urlRouterProvider, $locationProvider) {
 /*Ði?u hu?ng 404*/
 $urlRouterProvider.otherwise("404.html");
 /*Thi?t l?p các state*/
 $stateProvider
 .state('home', {
 url: "/",
 templateUrl: "public/views/style2.html",
 controller: 'baseController'
 })
 .state('cv', {
 url: "/cv",
 templateUrl: "public/views/resume.html",
 controller: 'baseController'
 })
 .state('profile', {
 url: "/profile",
 templateUrl: "/public/views/profile.html",
 controller: 'baseController'
 })
 .state('blog', {
 url: "/blog",
 templateUrl: "/public/views/blog.html",
 controller: 'baseController'
 })
 .state('contact', {
 url: "/contact",
 templateUrl: "/public/views/contact.html",
 controller: 'baseController'
 })
 .state('portfolio', {
 url: "/portfolio",
 templateUrl: "/public/views/portfolio.html",
 controller: 'baseController'
 })
 /*===============404 NOT FOUND================*/
 .state('404', {
 url: "/404.html",
 templateUrl : '/public/views/404.html',
 title: '404 - Không tìm th?y trang yêu c?u'
 });
 
}]);