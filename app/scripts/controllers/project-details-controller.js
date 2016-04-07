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
          	var projects = ProjectService.list();

            // Previous and Next Projects
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

            $scope.expand = function(item)
            {
                item.showfull = !item.showfull;
                for (var i = 0; i < $scope.selectedProject.videos.length; i++)
                {
                    var currentItem = $scope.selectedProject.videos[i];
                    if (currentItem !== item)
                    {
                        currentItem.showfull = false;
                    } 
                }
            };

          	// // Create and Animate Play Button
          	$timeout(function() {

          		 // angular.forEach($scope.selectedProject.videos, function(filterObj, key){


                 		// $scope.i = filterObj.title;

                 		// console.log($scope.selectedProject.id);

                 		var c1 = Snap("#circle1");
                 		var c2 = Snap("#circle2");
                    var c3 = Snap("#circle3");
                    var c4 = Snap("#circle4");

                 		var t1 = Snap(".triangle1");
                 		var t2 = Snap(".triangle2");
                    var t3 = Snap(".triangle3");
                    var t4 = Snap(".triangle4");

             		    var playCircle1 = c1.rect(100, 100, 100, 100, 50);
             		    var playCircle2 = c2.rect(100, 100, 100, 100, 50);
                    var playCircle3 = c3.rect(100, 100, 100, 100, 50);
                    var playCircle4 = c4.rect(100, 100, 100, 100, 50);

             		    var playTriangle1 = t1.polygon(0,0,30,20,0,40);
             		    var playTriangle2 = t2.polygon(0,0,30,20,0,40);
                    var playTriangle3 = t3.polygon(0,0,30,20,0,40);
                    var playTriangle4 = t4.polygon(0,0,30,20,0,40);


             		    playTriangle1.attr({ 
             		    	fill: "#fff",
							         id: 'playbutton',
             		    });

             		    playTriangle2.attr({ 
             		    	fill: "#fff",
							         id: 'playbutton2',
             		    });

                    playTriangle3.attr({ 
                      fill: "#fff",
                       id: 'playbutton3',
                    });

                    playTriangle4.attr({ 
                      fill: "#fff",
                       id: 'playbutton4',
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

                    playCircle3.attr({
                        fillOpacity: 0.7,
                        fill: '#000',
                        stroke: '#fff',
                        strokeOpacity: 1,
                        strokeWidth: 4,
                        id: 'point',
                        x: 0,
                        y: 0
                    });

                    playCircle4.attr({
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
                    $scope.tlExpand3 = new TimelineMax({paused: true});
                    $scope.tlExpand4 = new TimelineMax({paused: true});

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


                    $scope.tlExpand3.to(playCircle3.node, 0.1, {
                      attr: {
                        stroke: "black"
                    }
                    });
                    $scope.tlExpand3.to(playCircle3.node, 0.6, {
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

                    $scope.tlExpand3.to(playTriangle3.node, 0.2, {
                      css: {
                        autoAlpha: 0
                      },
                    },'-=0.7'); 

                    $scope.tlExpand4.to(playCircle4.node, 0.1, {
                      attr: {
                        stroke: "black"
                    }
                    });
                    $scope.tlExpand4.to(playCircle4.node, 0.6, {
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

                    $scope.tlExpand4.to(playTriangle4.node, 0.2, {
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



            var tlProjectsNav = new TimelineMax({paused: true});

              tlProjectsNav.to('.projects-nav', 0.6, {
                css: {
                      top: 0
                  },
                ease: Expo.easeOut
              }); 
              tlProjectsNav.to('.menu-circle', 0.2, {
                css: {
                      top: 13
                  },
                ease: Expo.easeOut
              },'-=0.6'); 




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

              var expandCircle3 = function () {
               
              $scope.tlExpand3.play();
              tlVidHeader.play();
              tlVidStage.play();
              $(".content-area").css("overflow-y", "hidden"); 

             };

              var expandCircle4 = function () {
               
              $scope.tlExpand4.play();
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
              $scope.tlExpand3.reverse();
              $scope.tlExpand4.reverse();
		         	$(".content-area").css("overflow-y", "auto");	
		         };

             $(".content-area").scroll(function() {

                var scrollPosition = $('.content-area').scrollTop(), // the current position of scroll
                elementOffset = $('.header').offset().top;
                // distance = (elementOffset - scrollPosition);

                // console.log(elementOffset);
                 
                 var scroll_pos_test = 500;
               // set to whatever you want it to be

                if((scrollPosition > scroll_pos_test) && (elementOffset > 50)) {
                  tlProjectsNav.play();
                 } 
                else
                {
                  tlProjectsNav.reverse();
                }
             });

          		 // Nitty Gritty
          		 $scope = angular.extend($scope, {
          		 	expandCircle1 : expandCircle1,
          		 	expandCircle2 : expandCircle2,
          		 	expandCircle3 : expandCircle3,
                expandCircle4 : expandCircle4,
          		 	reverseExpand : reverseExpand
          		 });

          lightbox.option({ // jshint ignore:line

            'resizeDuration': 200,
            'wrapAround': true,
            'showImageNumberLabel': false,
            'albumLabel': false
          });




      		}, 0);



        }]);

})(); 

