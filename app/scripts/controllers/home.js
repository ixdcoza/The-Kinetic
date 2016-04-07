(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name kinetixApp.controller:HomeCtrl
	 * @description
	 * # HomeCtrl
	 * Controller of the kinetixApp
	 */
	angular.module('kinetixApp')
		.controller('HomeCtrl', ['$scope', '$timeout', function($scope, $timeout){

	  		$scope.something = "something";

	  		$timeout(function() {

	  			document.getElementById("bgvid").play();

	  		},700);

	  		var tlarrowdown = new TimelineMax({
	  			paused: false,
	  			yoyo: true,
	  			repeat: -1
	  		});

	  		tlarrowdown.to('.arrow-container', 0.5, {
	  			top: 34
	  		});
	  		
	    
	  }]);

  })(); 