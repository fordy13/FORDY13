mod = angular.module('theBeanApp', ['ngResource', 'angularFileUpload', 'ngRoute'])

	.config(function($routeProvider, $locationProvider) {
	  $routeProvider
	  .when('/', {
	    templateUrl: '/views/list.html',
	    controller: 'mainController'
	  })
	  .when('/article/view/:articleId', {
	    templateUrl: '/views/view.html',
	    controller: 'mainController'
	  })
	  .when('/article/create', {
	    templateUrl: '/views/create.html',
	    controller: 'mainController'
	  })
	  .when('/article/:articleId/edit', {
	    templateUrl: '/views/edit.html',
	    controller: 'mainController'
	  });
	});
