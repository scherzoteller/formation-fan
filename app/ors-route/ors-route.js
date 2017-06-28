import "angular-ui-router";

const app = angular.module('ors-route', ['ui.router']);

const accueilStateUrl = require('./tmpl/accueil.html');
const contactStateUrl = require('./tmpl/contact.html');
const produitStateUrl = require('./tmpl/produit.html');
const serviceStateUrl = require('./tmpl/service.html');


app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	'ngInject';
	$locationProvider
		.html5Mode(true)
		.hashPrefix('!');

	var accueilState = {
		name: 'accueil',
		url: '/accueil',
		template: accueilStateUrl
	};
	var serviceState = {
		name: 'service',
		url: '/service',
		template: serviceStateUrl
	};
	var produitState = {
		name: 'produit',
		url: '/produit',
		template: produitStateUrl
	};
	var contactState = {
		name: 'contact',
		url: '/contact',
		template: contactStateUrl
	};

	$stateProvider.state(accueilState);
	$stateProvider.state(produitState);
	$stateProvider.state(contactState);
	$stateProvider.state(serviceState);

	$urlRouterProvider.otherwise('/');

});
