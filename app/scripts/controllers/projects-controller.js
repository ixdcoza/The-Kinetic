


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
	  	.controller('ProjectsCtrl', ['$scope', 'ProjectService', '$timeout', function($scope, ProjectService, $timeout){

        	$scope.projects = ProjectService.list();
        	
        	var tl = new TimelineMax({
        		paused: true
        	}),

            tl_vertLoader = new TimelineMax({
                paused: true
            }),

        	projectTransition = function () {
       
        		tl.to('.content-area', 1.2, {
        	        scrollTo:{
        	            y: 0
        	        }, 
        	        ease:Power3.easeInOut
        	     });
                tl_vertLoader.to('.vert-loader', 1.2, {
                    left: 0, 
                    ease:Power3.easeInOut
                 });
                // .to('.project-inner', 0.5, {
                //     autoAlpha: 0,
                //     ease:Power3.easeInOut
                //  });

        	    tl.play();
                tl_vertLoader.restart();
                $(".content-area").addClass( "transitionClass" );
                $timeout(function() {
                    $(".content-area").removeClass( "transitionClass" );
                }, 1200);

        	};

        	 $scope = angular.extend($scope, {
        	 	projectTransition : projectTransition
        	 });


    	}]);

})(); 