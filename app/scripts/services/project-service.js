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
              description: 'The story of mans creation and fall into exile.',
              thumb: '../../images/img1.jpg',
              videos : [
                {
                  id : 1,
                  title : 'My Mixtape 1',
                  type : 'Show Package 1',
                  thumb: '../../images/img1.jpg'
                },
                {
                  id : 2,
                  title : 'My Mixtape 2',
                  type : 'Show Package 2',
                  thumb: '../../images/img1.jpg'
                },
                {
                  id : 3,
                  title : 'My Mixtape 3',
                  type : 'Show Package 3',
                  thumb: '../../images/img1.jpg'
                }]
          },
          {
              id: 2,
              slug: 'project-2',
              name: 'Project 2',
              description: 'A good woman remains faithful to her family and finds love in a surprising place.',
              thumb: '../../images/img2.jpg'
          },
          {
              id: 3,
              slug: 'project-3',
              name: 'Project 3',
              description: 'A young queen risks her life to save her people from the brink of death.',
              thumb: '../../images/img1.jpg'
          },
          {
              id: 4,
              slug: 'project-4',
              name: 'Project 4',
              description: 'A young queen risks her life to save her people from the brink of death.',
              thumb: '../../images/img1.jpg'
          },
          {
              id: 5,
              slug: 'project-5',
              name: 'Project 5',
              description: 'A young queen risks her life to save her people from the brink of death.',
              thumb: '../../images/img1.jpg'
          },
          {
              id: 6,
              slug: 'project-6',
              name: 'Project 6',
              description: 'A young queen risks her life to save her people from the brink of death.',
              thumb: '../../images/img1.jpg'
          },
          {
              id: 7,
              slug: 'project-7',
              name: 'Project 7',
              description: 'A young queen risks her life to save her people from the brink of death.',
              thumb: '../../images/img1.jpg'
          },
          {
              id: 8,
              slug: 'project-8',
              name: 'Project 8',
              description: 'A young queen risks her life to save her people from the brink of death.',
              thumb: '../../images/img1.jpg'
          },
          {
              id: 9,
              slug: 'project-9',
              name: 'Project 9',
              description: 'A young queen risks her life to save her people from the brink of death.',
              thumb: '../../images/img1.jpg'
          },
          {
              id: 10,
              slug: 'project-10',
              name: 'Project 10',
              description: 'A young queen risks her life to save her people from the brink of death.',
              thumb: '../../images/img1.jpg'
          },
          {
              id: 11,
              slug: 'project-11',
              name: 'Project 11',
              description: 'A young queen risks her life to save her people from the brink of death.',
              thumb: '../../images/img1.jpg'
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