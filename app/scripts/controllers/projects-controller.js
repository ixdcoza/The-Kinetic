


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
        	
        	var tl = new TimelineMax({
        		paused: true
        	}),

        	projectTransition = function () {
       
        		tl.to('.content-area', 1.5, {
        	        scrollTo:{
        	            y: 0
        	        }, 
        	        ease:Power3.easeInOut
        	     });
                // .to('.project-inner', 0.5, {
                //     autoAlpha: 0,
                //     ease:Power3.easeInOut
                //  });

        	     tl.play();

        	};

        	 $scope = angular.extend($scope, {
        	 	projectTransition : projectTransition
        	 });


    	}]);

})(); 