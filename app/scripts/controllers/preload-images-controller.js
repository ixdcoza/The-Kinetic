


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
            function( $scope, preloader ) {
                // I keep track of the state of the loading images.
                $scope.isLoading = true;
                $scope.isSuccessful = false;
                $scope.percentLoaded = 0;
                // I am the image SRC values to preload and display./
                // --
                // NOTE: "cache" attribute is to prevent images from caching in the
                // browser (for the sake of the demo).
                $scope.imageLocations = [
                       ( '../images/poster.jpg' ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=1&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=2&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=3&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=4&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=5&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=6&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=7&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=8&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=9&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=10&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=11&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=12&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=13&cache=" + ( new Date() ).getTime() ),
                    // ( "http://www.bennadel.com/images/header/photos/ryan_anklam.jpg?v=14&cache=" + ( new Date() ).getTime() ),
                ];
                // Preload the images; then, update display when returned.
                preloader.preloadImages( $scope.imageLocations ).then(
                    function handleResolve( imageLocations ) {
                        // Loading was successful.
                        $scope.isLoading = false;
                        $scope.isSuccessful = true;
                        console.info( "Preload Successful"+imageLocations );
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
                        console.info( "Percent loaded:", event.percent );
                    }
                );
            }
        );



})(); 