(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name kinetixApp.controller:ProjectsCtrl
	 * @description
	 * # ProjectsCtrl
	 * Controller of the kinetixApp
	 */
	angular.module('kinetixApp')
	  	.controller('ProjectsCtrl', ['$scope', 'ProjectService', function($scope, ProjectService){

        	$scope.projects = ProjectService.list();

    	}]);

})(); 