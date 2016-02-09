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
	  	.controller('ProjectsDetailCtrl', ['$scope', '$stateParams', '$timeout', 'ProjectService', function($scope, $stateParams, $timeout, ProjectService){
          

          	$scope.selectedProject = ProjectService.find($stateParams.id);

          	$scope.nextProject = $scope.selectedProject.id + 1;
          	$scope.prevProject = $scope.selectedProject.id - 1;



          	// Create and Animate Play Button
          	$timeout(function() {


          		var videoTotal = $scope.selectedProject.videos.length;

          		// LOOP through the videos
          		for (var i = 0; i < videoTotal; i++) {
          		    $scope.currentVid = $scope.selectedProject.videos[i].id;
          		    console.log($scope.currentVid);
          		}



          		var s = Snap(".circle1");
          	    var bigCircle = s.circle(50, 50, 48);
          		
          		bigCircle.attr({
          	    	fill: "black",
          	    	stroke: "white",
          	    	strokeWidth: 3,
          	    	opacity: 0.7
          		});

          	
          		var tlExpand = new TimelineMax({
          			paused: true
          		});

	          	

      			tlExpand.to(bigCircle.node, 0.1, {
      				attr: {
	                	stroke: "black"
	                }
      			});

      			tlExpand.to(bigCircle.node, 0.6, {
      		  		css: {
	                        scaleX: 30.0,
	                        scaleY: 30.0,
	                        transformOrigin: "center center",
	                        autoAlpha: 1
	                    },
	                attr: {
	                	fill: "black"
	                }  ,
	                ease: Expo.easeIn
      			});	

	          	

	          	var expandCircle = function () {
	          		tlExpand.play();
	          	};

	          	var reverseExpand = function () {
	          		tlExpand.reverse();
	          	};

          	
	      		$scope = angular.extend($scope, {
	      			expandCircle : expandCircle,
	      			reverseExpand : reverseExpand
	      		});



      		}, 0);
          	




        }]);

})(); 

