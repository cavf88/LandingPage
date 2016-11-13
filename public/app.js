/**
 * Created by Gabe on 2016-11-08.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('landingPageApp', [
    'ui.router',
    'landingPageApp.menu'
]).
config( function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home/home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about/about.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact/contact.html'
        });
});
