(function () { 
  
  'use strict';

  /**
  * @ngdoc function
  * @name kinetixApp.directive:OwlCarouselDirective
  * @description
  * # OwlCarouselDirective
  * OwlCarouselDirective of the kinetixApp
  */
  angular.module('kinetixApp')

  // OWL CAROUSEL USAGE
  .directive("owlCarousel", function() {
      return {
          restrict: 'E',
          transclude: false,
          link: function (scope) {
              scope.initCarousel = function(element) {
                // provide any default options you want
                  var defaultOptions = {
                    navigation: true, 
                    pagination: false, 
                    items: 1,
                    // autoplay: true,
                    // autoplayTimeout: 2000,
                    // autoplayHoverPause: true,
                     // slideSpeed : 1800

                  };
                  var customOptions = scope.$eval($(element).attr('data-options'));
                  // combine the two options objects
                  for(var key in customOptions) {
                      defaultOptions[key] = customOptions[key];
                  }
                  // init carousel
                  $(element).owlCarousel(defaultOptions);


                  $('.arrow-right').click(function() {
                    var owl = $(element);
                    owl.trigger('next.owl.carousel');
                  });

                  $('.arrow-left').click(function() {
                    var owl = $(element);
                    owl.trigger('prev.owl.carousel');
                  });
              };
          }
      };
  })
  .directive('owlCarouselItem', [function() {
      return {
          restrict: 'A',
          transclude: false,
          link: function(scope, element) {
            // wait for the last item in the ng-repeat then call init
              if(scope.$last) {
                  scope.initCarousel(element.parent());
              }
          }
      };
  }]);
})(); 



