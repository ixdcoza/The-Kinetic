(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name kinetixApp.controller:ProjectService
	 * @description
	 * # ProjectService
	 * Service of the projects for kinetixApp
	 */
	angular.module('kinetixApp')
	  .service('ProjectService', function(){
          /* jshint ignore:start */
          var projects = [{
              id: 1,
              slug: 'project-1',
              name: 'Project 1',
              description: 'The story of mans creation and fall into exile.'
          },
          {
              id: 2,
              slug: 'project-2',
              name: 'Project 2',
              description: 'A good woman remains faithful to her family and finds love in a surprising place.'
          },
          {
              id: 3,
              slug: 'project-3',
              name: 'Project 3',
              description: 'A young queen risks her life to save her people from the brink of death.'
          }];
          return {
              list: function(){
                  return projects;
              },
              find: function(id){
                  return _.find(projects, function(project){
                    return project.id == id;
                  });
              }
          };
          /* jshint ignore:end */
        });

  })(); 