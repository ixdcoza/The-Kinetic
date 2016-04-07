


(function () { 

    'use strict';

    /**
     * @ngdoc function
     * @name kinetixApp.AppController
     * @description
     * # AppController
     * Controller of the kinetixApp
     */
    angular.module('kinetixApp')
        .controller(
            "AppController",
            function( $rootScope, $scope, $state, $location, preloader ) {

                $rootScope.$on('$stateChangeStart',
                function(){
                    if ($state.includes('app.projects')) {

                            
                            var tlBackButtonFix = new TimelineMax({paused: true});

                            tlBackButtonFix.to('.menu-circle', 0.3, {
                                css: {
                                    left: 28
                                },
                                ease: Expo.easeIn
                            },'-=0.5'); 
                            tlBackButtonFix.to('.arrow-left', 0.3, {
                                css: {
                                    left: 0
                                },
                                ease: Expo.easeIn
                            },'-=0.5'); 
                            tlBackButtonFix.to('.arrow-right', 0.3, {
                                css: {
                                    right: 0
                                },
                                ease: Expo.easeIn
                            },'-=0.5'); 

                            $(".content-area").css("overflow-y", "auto"); 

                            tlBackButtonFix.play();


                    }
                });

                // I keep track of the state of the loading images.
                $scope.isLoading = true;
                $scope.isSuccessful = false;
                $scope.percentLoaded = 0;
                // I am the image SRC values to preload and display./
                // --
                // NOTE: "cache" attribute is to prevent images from caching in the
                // browser (for the sake of the demo).
                $scope.imageLocations = [
                    ( "../../images/projects/1/thumb.jpg" ),
                    ( "../../images/projects/2/thumb.jpg" ),
                    ( "../../images/projects/3/thumb.jpg" ),
                    ( "../../images/projects/4/thumb.jpg" ),
                    ( "../../images/projects/5/thumb.jpg" ),
                    ( "../../images/projects/6/thumb.jpg" ),
                    ( "../../images/projects/7/thumb.jpg" ),
                    ( "../../images/projects/8/thumb.jpg" ),
                    ( "../../images/projects/9/thumb.jpg" ),
                    ( "../../images/projects/10/thumb.jpg" ),
                    ( "../../images/projects/11/thumb.jpg" ),
                    ( "../../images/projects/11/thumb.jpg" ),
                    ( "../../images/projects/12/thumb.jpg" ),
                    ( "../../images/projects/13/thumb.jpg" ),
                    ( "../../images/projects/14/thumb.jpg" ),
                    ( "../../images/projects/15/thumb.jpg" ),
                    ( "../../images/projects/16/thumb.jpg" ),
                    ( "../../images/projects/17/thumb.jpg" ),
                    ( "../../images/projects/18/thumb.jpg" ),
                    // ( "../../images/projects/19/thumb.jpg" ),
                    ( "../../images/projects/20/thumb.jpg" ),
                    ( "../../images/projects/21/thumb.jpg" ),
                    ( "../../images/projects/22/thumb.jpg" ),
                    ( "../../images/projects/23/thumb.jpg" ),
                    ( "../../images/projects/24/thumb.jpg" ),
                    ( "../../images/projects/25/thumb.jpg" ),
                    ( "../../images/projects/26/thumb.jpg" ),
                    // ( "../../images/projects/27/thumb.jpg" ),
                    ( "../../images/projects/28/thumb.jpg" ),
                    ( "../../images/projects/29/thumb.jpg" ),
                    ( "../../images/projects/30/thumb.jpg" ),
                    ( "../../images/projects/31/thumb.jpg" ),
                    ( "../../images/projects/32/thumb.jpg" ),
                    ( "../../images/projects/33/thumb.jpg" ),
                    ( "../../images/projects/34/thumb.jpg" ),
                    ( "../../images/projects/35/thumb.jpg" ),
                    ( "../../images/projects/36/thumb.jpg" ),
                    ( "../../images/projects/37/thumb.jpg" ),
                    ( "../../images/projects/38/thumb.jpg" ),
                    ( "../../images/projects/39/thumb.jpg" ),
                    ( "../../images/projects/40/thumb.jpg" ),
                    ( "../../images/projects/41/thumb.jpg" ),
                ];
                // Preload the images; then, update display when returned.
                preloader.preloadImages( $scope.imageLocations ).then(
                    function handleResolve( imageLocations ) {
                        // Loading was successful.
                        $scope.isLoading = false;
                        $scope.isSuccessful = true;
                        imageLocations = imageLocations;
                    },
                    function handleReject( imageLocation ) {
                        // Loading failed on at least one image.
                        $scope.isLoading = false;
                        $scope.isSuccessful = false;
                        console.error( "Image Failed", imageLocation );
                        console.info( "Preload Failure" );
                    },
                    function handleNotify( event ) {
                        $scope.percentLoaded = event.percent;
                    }
                );

            }
        );



})(); 

