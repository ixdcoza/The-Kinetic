(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name kinetixApp.controller:ProjectsDetailCtrl
	 * @description
	 * # ProjectsDetailCtrl
	 * Controller of the kinetixApp
	 */
	angular.module('kinetixApp')
	  	.controller('ProjectsDetailCtrl', ['$scope', '$stateParams', 'ProjectService', function($scope, $stateParams, ProjectService){
          
          $scope.selectedProject = ProjectService.find($stateParams.id);

        }]);

})(); 

