(function () { 

	'use strict';


	/*!
	* classie - class helper functions
	* from bonzo https://github.com/ded/bonzo
	* 
	* classie.has( elem, 'my-class' ) -> true/false
	* classie.add( elem, 'my-new-class' )
	* classie.remove( elem, 'my-unwanted-class' )
	* classie.toggle( elem, 'my-class' )
	*/

	/*jshint browser: true, strict: true, undef: true */
	/*global define: false */

	// class helper functions from bonzo https://github.com/ded/bonzo

	function classReg( className ) {
	return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}

	// classList support for class management
	// altho to be fair, the api sucks because it won't accept multiple classes at once
	var hasClass, addClass, removeClass;

	if ( 'classList' in document.documentElement ) {
	hasClass = function( elem, c ) {
	return elem.classList.contains( c );
	};
	addClass = function( elem, c ) {
	elem.classList.add( c );
	};
	removeClass = function( elem, c ) {
	elem.classList.remove( c );
	};
	}
	else {
	hasClass = function( elem, c ) {
	return classReg( c ).test( elem.className );
	};
	addClass = function( elem, c ) {
	if ( !hasClass( elem, c ) ) {
	  elem.className = elem.className + ' ' + c;
	}
	};
	removeClass = function( elem, c ) {
	elem.className = elem.className.replace( classReg( c ), ' ' );
	};
	}

	function toggleClass( elem, c ) {
	var fn = hasClass( elem, c ) ? removeClass : addClass;
	fn( elem, c );
	}

	var classie = {
	// full names
	hasClass: hasClass,
	addClass: addClass,
	removeClass: removeClass,
	toggleClass: toggleClass,
	// short names
	has: hasClass,
	add: addClass,
	remove: removeClass,
	toggle: toggleClass
	};

	// transport
	if ( typeof define === 'function' && define.amd ) {
	// AMD
	define( classie );
	} else {
	// browser global
	window.classie = classie;
	}


	/**
	 * main.js
	 * http://www.codrops.com
	 *
	 * Licensed under the MIT license.
	 * http://www.opensource.org/licenses/mit-license.php
	 * 
	 * Copyright 2014, Codrops
	 * http://www.codrops.com
	 */
	(function() {

		var bodyEl = document.body,
			content = document.querySelector( '.content-wrap' ),
			openbtn = document.getElementById( 'open-button' ),
			closebtn = document.getElementById( 'close-button' ),
			menuItem = document.getElementById( 'menu' ),
			isOpen = false,
			tl = new TimelineMax({
				paused: true
			}),

			tlmenuitems = new TimelineMax({
				paused: true
			}),

			tlmenucircle = new TimelineMax({
				paused: true
			});

		function init() {
			initEvents();
		}

		function initEvents() {
			openbtn.addEventListener( 'click', toggleMenu );
			if( closebtn ) {
				closebtn.addEventListener( 'click', toggleMenu );
			}

			// close the menu element if the target it´s not the menu element or one of its descendants..
			content.addEventListener( 'click', function(ev) {
				var target = ev.target;
				if( isOpen && target !== openbtn ) {
					toggleMenu();
				}
			} );

			menuItem.addEventListener( 'click', function() {
				if( isOpen !== openbtn ) {
					toggleMenu();
				}
			} );


			tlmenuitems.staggerFrom(".menu-item", 0.3, {top:400, opacity: 0, delay:0.4, ease:Circ.easeOut}, 0.1);
			tl.to('.menu-wrap', 0.6, {
				left: 0,
				bottom: 0,
				ease: Power1.easeInOut
			});

			// tlmenucircle.to('.menu-circle', 0.6, {
			// 	left: -100,
			// 	ease: Circ.easeInOut
			// }, "-=0.9");



			
		}

		function toggleMenu() {
			if( isOpen ) {
				classie.remove( bodyEl, 'show-menu' );
				tl.reverse();
				tlmenucircle.reverse();
				console.log('menu closed');
			}
			else {
				classie.add( bodyEl, 'show-menu' );
				console.log('menu open');
				tl.play();
				tlmenucircle.play();
				tlmenuitems.restart();
			}
			isOpen = !isOpen;
		}

		init();



	})();



  })(); 