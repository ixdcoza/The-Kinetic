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
              images: [
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/4cf65a25334715.563440162b630.jpg',
                '../../images/video-cover.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fe45e531793539.568d15ffd0925.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a7c97731793539.56608292a75fc.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/2ae33c25334715.563440491366c.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ae9eb425334715.563449bbb63fc.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c9fd9325334715.563440152de97.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/174d4425334715.56343fdf16754.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/20fba27378785.560aa7aa3dff8.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/7b4fc47378785.560aa7c546977.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5e73e27378785.560aa7d48a165.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/762e6a7378785.560aa7bd47a49.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1298007378785.560aa7c5bd068.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6431057378785.560aa7b8854e2.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b18cfe7378785.560aa7bdf121e.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/2c1e7f7378785.560aa7c98895e.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/4247517378785.560aa7be40c4b.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/cdb3f97378785.560aa7c31f194.jpg'

              ],
              videos : [
                {
                  id : 1,
                  title : 'My Mixtape 1',
                  type : 'Show Package 1',
                  cover: '../../images/video-cover.jpg',
                  playTrigger: 'circle1'
                },
                {
                  id : 2,
                  title : 'My Mixtape 2',
                  type : 'Show Package 2',
                  cover: '../../images/video-cover.jpg',
                  playTrigger: 'circle2'
                },
                {
                  id : 3,
                  title : 'My Mixtape 3',
                  type : 'Show Package 3',
                  cover: '../../images/video-cover.jpg',
                  playTrigger: 'circle3'
                }]
          },
          {
              id: 2,
              slug: 'project-2',
              name: 'Project 2',
              description: 'A good woman remains faithful to her family and finds love in a surprising place.',
              thumb: '../../images/img2.jpg',
              images: [
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/2c1e7f7378785.560aa7c98895e.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/4247517378785.560aa7be40c4b.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b18cfe7378785.560aa7bdf121e.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/cdb3f97378785.560aa7c31f194.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/4cf65a25334715.563440162b630.jpg',
                '../../images/video-cover.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fe45e531793539.568d15ffd0925.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a7c97731793539.56608292a75fc.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/2ae33c25334715.563440491366c.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ae9eb425334715.563449bbb63fc.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/174d4425334715.56343fdf16754.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/20fba27378785.560aa7aa3dff8.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/1400/c9fd9325334715.563440152de97.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/7b4fc47378785.560aa7c546977.jpg',
                
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/762e6a7378785.560aa7bd47a49.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/1298007378785.560aa7c5bd068.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6431057378785.560aa7b8854e2.jpg',
                'https://mir-s3-cdn-cf.behance.net/project_modules/disp/5e73e27378785.560aa7d48a165.jpg'
                

              ],
              videos : [
                {
                  id : 1,
                  title : 'My Mixtape 1',
                  type : 'Show Package 1',
                  cover: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/4cf65a25334715.563440162b630.jpg'
                },
                {
                  id : 2,
                  title : 'My Mixtape 3',
                  type : 'Show Package 3',
                  cover: 'http://orig13.deviantart.net/aeb7/f/2013/028/7/f/dark_side_lightsaber_hilt___concept_design_by_blastedhitmowaka-d5t2ege.jpg'
                }]
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