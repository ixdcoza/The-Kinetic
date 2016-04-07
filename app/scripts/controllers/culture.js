(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name kinetixApp.controller:CultureCtrl
	 * @description
	 * # CultureCtrl
	 * Controller of the kinetixApp
	 */
	angular.module('kinetixApp')
	  .controller('CultureCtrl', ['$scope', 'CultureService', function($scope, CultureService){

	  		
	  		$scope.images = CultureService.list();

	    
	 
        }]);

})(); 