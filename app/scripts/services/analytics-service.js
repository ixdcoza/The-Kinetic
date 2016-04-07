(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name kinetixApp.controller:AnalyticsService
	 * @description
	 * # AnalyticsService
	 * Service of the projects for kinetixApp
	 */
	angular.module('kinetixApp')
	  .service('AnalyticsService', function(){

        /* jshint ignore:start */
        this.recordPageview = function(url) {
            ga('set', 'page', url);
            ga('send', 'pageview');
          };

        /* jshint ignore:end */

         
        });

  })(); 