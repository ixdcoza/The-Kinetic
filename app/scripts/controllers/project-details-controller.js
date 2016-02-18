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
	  	.controller('ProjectsDetailCtrl', ['$scope', '$sce', '$stateParams', '$timeout', 'ProjectService', function($scope, $sce, $stateParams, $timeout, ProjectService){
          

	  		// Define selectedProject
          	$scope.selectedProject = ProjectService.find($stateParams.id);

          	// Previous and Next Projects
          	var projects = ProjectService.list();
          	$scope.projectTotal = projects.length;
          	if ($scope.selectedProject.id === 1) {
          		$scope.prevProject = $scope.projectTotal;
          		$scope.nextProject = $scope.selectedProject.id + 1;
          	}
          	else if ($scope.selectedProject.id === $scope.projectTotal) {
          		$scope.nextProject = 1;
          		$scope.prevProject = $scope.selectedProject.id - 1;
          	} else {
          		$scope.nextProject = $scope.selectedProject.id + 1;
          		$scope.prevProject = $scope.selectedProject.id - 1;
          	}


          	$scope.descriptionHTML = $scope.selectedProject.description;
          	$scope.projectDescription = $sce.trustAsHtml($scope.descriptionHTML);

          	$scope.agencyHTML = $scope.selectedProject.agency;
          	$scope.projectAgency = $sce.trustAsHtml($scope.agencyHTML);

          	$scope.collaboratorsHTML = $scope.selectedProject.collaborators;
          	$scope.projectCollaborators = $sce.trustAsHtml($scope.collaboratorsHTML);

          	$scope.soundHTML = $scope.selectedProject.sound;
          	$scope.projectSound = $sce.trustAsHtml($scope.soundHTML);


          	// // Create and Animate Play Button
          	$timeout(function() {

          		 // angular.forEach($scope.selectedProject.videos, function(filterObj, key){


                 		// $scope.i = filterObj.title;

                 		// console.log($scope.selectedProject.id);

                 		var c1 = Snap("#circle1");
                 		var c2 = Snap("#circle2");

                 		var t1 = Snap(".triangle1");
                 		var t2 = Snap(".triangle2");
                 		// var s3 = Snap(".circle3");

             		    var playCircle1 = c1.rect(100, 100, 100, 100, 50);
             		    var playCircle2 = c2.rect(100, 100, 100, 100, 50);

             		    var playTriangle1 = t1.polygon(0,0,30,20,0,40);
             		    var playTriangle2 = t2.polygon(0,0,30,20,0,40);


             		    playTriangle1.attr({ 
             		    	fill: "#fff",
							id: 'playbutton',
             		    });

             		    playTriangle2.attr({ 
             		    	fill: "#fff",
							id: 'playbutton2',
             		    });

                 		playCircle1.attr({
                 	    	fillOpacity: 0.7,
                 	    	fill: '#000',
							stroke: '#fff',
							strokeOpacity: 1,
							strokeWidth: 4,
							id: 'point',
							x: 0,
							y: 0
                 		});

                 		playCircle2.attr({
                 	    	fillOpacity: 0.7,
                 	    	fill: '#000',
							stroke: '#fff',
							strokeOpacity: 1,
							strokeWidth: 4,
							id: 'point',
							x: 0,
							y: 0
                 		});


                 		// // create a new timeline to expand playCircle1 but keep it paused
                 		$scope.tlExpand1 = new TimelineMax({paused: true});
                 		$scope.tlExpand2 = new TimelineMax({paused: true});

                 		var tlVidHeader = new TimelineMax({paused: true});
                 		var tlVidStage = new TimelineMax({paused: true});


                 		// // Actual animation:
                 		$scope.tlExpand1.to(playCircle1.node, 0.1, {
                 			attr: {
                 				stroke: "black"
                 		}
                 		});
                 		$scope.tlExpand1.to(playCircle1.node, 0.6, {
                 			css: {
                 		        // scaleX: 10.0,
                 		        // scaleY: 10.0,
                 		        // transformOrigin: "center center",
                 		        autoAlpha: 1
                 		    },
	                 		attr: {
	                 			rx: 1000,
     							ry: 1000,
     							fill: '#000',
     							fillOpacity: 1.0,
     							stroke: '#000',
     							width: 2000,
     							height: 2000,
     							x: -1000,
     							y: -1000,
	                 		}  ,
	                 		ease: Expo.easeIn
                 		});	

                 		$scope.tlExpand1.to(playTriangle1.node, 0.2, {
                 			css: {
                 				autoAlpha: 0
                 			},
                 		},'-=0.7');	


                 		$scope.tlExpand2.to(playCircle2.node, 0.1, {
                 			attr: {
                 				stroke: "black"
                 		}
                 		});
                 		$scope.tlExpand2.to(playCircle2.node, 0.6, {
                 			css: {
                 		        // scaleX: 10.0,
                 		        // scaleY: 10.0,
                 		        // transformOrigin: "center center",
                 		        autoAlpha: 1
                 		    },
	                 		attr: {
	                 			rx: 1000,
     							ry: 1000,
     							fill: '#000',
     							fillOpacity: 1.0,
     							stroke: '#000',
     							width: 2000,
     							height: 2000,
     							x: -1000,
     							y: -1000,
	                 		}  ,
	                 		ease: Expo.easeIn
                 		});	

                 		$scope.tlExpand2.to(playTriangle2.node, 0.2, {
                 			css: {
                 				autoAlpha: 0
                 			},
                 		},'-=0.7');	

                 		

                 		tlVidHeader.to('.video-header', 0.6, {
                 			css: {
                 		        height: 1000
                 		    },
	                 		ease: Expo.easeIn
                 		},'+=0.5');	

                 		tlVidStage.to('.vid-stage', 0.3, {
                 			display: 'block',
	                 		ease: Expo.easeIn
                 		},'+=1');
                 		tlVidStage.to('.menu-circle', 0.3, {
                 			css: {
                 		        left: -200
                 		    },
	                 		ease: Expo.easeIn
                 		},'-=0.5');	
                 		tlVidStage.to('.arrow-left', 0.3, {
                 			css: {
                 		        left: -200
                 		    },
	                 		ease: Expo.easeIn
                 		},'-=0.5');	
                 		tlVidStage.to('.arrow-right', 0.3, {
                 			css: {
                 		        right: -200
                 		    },
	                 		ease: Expo.easeIn
                 		},'-=0.5');	




		         // }); // end forEach


          		 var expandCircle1 = function () {
          		 
		         	$scope.tlExpand1.play();
		         	tlVidHeader.play();
		         	tlVidStage.play();
		         	$(".content-area").css("overflow-y", "hidden");	

		         };

		         var expandCircle2 = function () {
          		 
		         	$scope.tlExpand2.play();
		         	tlVidHeader.play();
		         	tlVidStage.play();
		         	$(".content-area").css("overflow-y", "hidden");	

		         };

		         // function to REVERSE timeline
		         var reverseExpand = function () {
		         	
		         	tlVidStage.reverse();
		         	tlVidHeader.reverse();
		         	$scope.tlExpand1.reverse();
		         	$scope.tlExpand2.reverse();
		         	$(".content-area").css("overflow-y", "auto");	
		         };


		         // var expandCircle2 = function () {
		         // 	$scope.tlExpand2.play();
		         // };
		         // var expandCircle3 = function () {
		         // 	$scope.tlExpand3.play();
		         // };

          		 // Nitty Gritty
          		 $scope = angular.extend($scope, {
          		 	expandCircle1 : expandCircle1,
          		 	expandCircle2 : expandCircle2,
          		 	// expandCircle3 : expandCircle3,
          		 	reverseExpand : reverseExpand
          		 });





				

				
	
          		



      		}, 0);
          	




        }]);

})(); 

