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
          

          	$scope.selectedProject = ProjectService.find($stateParams.id);

          	$scope.nextProject = $scope.selectedProject.id + 1;
          	$scope.prevProject = $scope.selectedProject.id - 1;


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

                 		console.log($scope.selectedProject.id);

                 		var s = Snap(".circle1");
                 		// var s2 = Snap(".circle2");
                 		// var s3 = Snap(".circle3");

             		    var playCircle1 = s.rect(100, 100, 100, 100, 50);
             		    // var playCircle2 = s2.circle(50, 50, 48);
             		    // var playCircle3 = s3.circle(50, 50, 48);

                 		playCircle1.attr({
                 	    	// fill: "black",
                 	    	// stroke: "white",
                 	    	// strokeWidth: 3,
                 	    	opacity: 0.7,
                 	    	fill: '#000',
							stroke: '#fff',
							strokeOpacity: 1,
							strokeWidth: 4,
							id: 'point',
							x: 0,
							y: 0
                 		});

                 		// playCircle2.attr({
                 	 //    	fill: "black",
                 	 //    	stroke: "blue",
                 	 //    	strokeWidth: 3,
                 	 //    	opacity: 0.7
                 		// });

                 		// playCircle3.attr({
                 	 //    	fill: "black",
                 	 //    	stroke: "white",
                 	 //    	strokeWidth: 3,
                 	 //    	opacity: 0.7
                 		// });

                 		// // create a new timeline to expand playCircle1 but keep it paused
                 		var tlExpand1 = new TimelineMax({paused: true});
                 		// $scope.tlExpand2 = new TimelineMax({paused: true});
                 		// $scope.tlExpand3 = new TimelineMax({paused: true});

                 		var tlVidHeader = new TimelineMax({paused: true});
                 		var tlVidStage = new TimelineMax({paused: true});


                 		// // Actual animation:
                 		tlExpand1.to(playCircle1.node, 0.1, {
                 			attr: {
                 				stroke: "black"
                 		}
                 		});
                 		tlExpand1.to(playCircle1.node, 0.6, {
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



                 		// $scope.tlExpand2.to(playCircle2.node, 0.1, {
                 		// 	attr: {
                 		// 		stroke: "black"
                 		// }
                 		// });
                 		// $scope.tlExpand2.to(playCircle2.node, 0.6, {
                 		// 		css: {
                 		//         scaleX: 10.0,
                 		//         scaleY: 10.0,
                 		//         transformOrigin: "center center",
                 		//         autoAlpha: 1
                 		//     },
	                 	// 	attr: {
	                 	// 		fill: "black"
	                 	// 	}  ,
	                 	// 	ease: Expo.easeIn
                 		// });	

                 		// $scope.tlExpand3.to(playCircle3.node, 0.1, {
                 		// 	attr: {
                 		// 		stroke: "black"
                 		// }
                 		// });
                 		// $scope.tlExpand3.to(playCircle3.node, 0.6, {
                 		// 		css: {
                 		//         scaleX: 10.0,
                 		//         scaleY: 10.0,
                 		//         transformOrigin: "center center",
                 		//         autoAlpha: 1
                 		//     },
	                 	// 	attr: {
	                 	// 		fill: "black"
	                 	// 	}  ,
	                 	// 	ease: Expo.easeIn
                 		// });	





		         // }); // end forEach


          		 var expandCircle1 = function () {
          		 
		         	tlExpand1.play();
		         	tlVidHeader.play();
		         	tlVidStage.play();
		         	$(".content-area").css("overflow-y", "hidden");	

		         };

		         // function to REVERSE timeline
		         var reverseExpand = function () {
		         	
		         	tlVidStage.reverse();
		         	tlVidHeader.reverse();
		         	tlExpand1.reverse();
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
          		 	// expandCircle2 : expandCircle2,
          		 	// expandCircle3 : expandCircle3,
          		 	reverseExpand : reverseExpand
          		 });





				

				
	
          		



      		}, 0);
          	




        }]);

})(); 

