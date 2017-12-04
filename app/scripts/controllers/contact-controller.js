(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name kinetixApp.controller:ContactCtrl
	 * @description
	 * # ContactCtrl
	 * Controller of the kinetixApp
	 */
	angular.module('kinetixApp')
	  .controller('ContactCtrl', function () {


	  	/* jshint ignore:start */
	  	// google.maps.event.addDomListener(window, 'load', init);


          	// // Create and Animate Play Button


	  	function init() {
	  	    // Basic options for a simple Google Map
	  	    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	  	    var mapOptions = {
	  	        // How zoomed in you want the map to start at (always required)
	  	        zoom: 15,
	  	          scrollwheel: false,
	  	          disableDoubleClickZoom: true,

	  	        // The latitude and longitude to center the map (always required)
	  	        center: new google.maps.LatLng(-26.149971, 28.034721), 

	  	        // How you would like to style the map. 
	  	        // This is where you would paste any style found on Snazzy Maps.
	  	         styles: [{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","elementType":"all","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]}]
	  	    };

	  	    // Get the HTML DOM element that will contain your map 
	  	    // We are using a div with id="map" seen below in the <body>
	  	    var mapElement = document.getElementById('map');

	  	    // Create the Google Map using our element and options defined above
	  	    var map = new google.maps.Map(mapElement, mapOptions);

	  	    // Let's also add a marker while we're at it
	  	    var marker = new google.maps.Marker({
	  	        position: new google.maps.LatLng(-26.149971, 28.034721),
	  	        map: map,
	  	        title: 'The Kinetic',
	  	        icon: '../../images/marker.png'
	  	    });
	  	}
	  	init();
	  	/* jshint ignore:end */


	    
	  });


})(); 
