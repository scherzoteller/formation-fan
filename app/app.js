// import './css/skel.css';
// import './css/style.css';
// import './css/style-xlarge.css';

import 'angular/angular-csp.css';
import './style.scss';

import 'angular';
import './ors-star/ors-star.js';
import './ors-route/ors-route.js';

var app = angular.module('main', ['ors-star', 'ors-route']);

import orsHeaderUrl from './tmpl/ors-header.html';
const orsBodyUrl = require('./tmpl/ors-body.html');
const orsFooterUrl = require('./tmpl/ors-footer.html');

app.directive('orsHeader', function () {
	return {
		restrict: 'E',
		template: orsHeaderUrl
	};
});

app.directive('orsBody', function () {
	return {
		restrict: 'E',
		template: orsBodyUrl
	};
});

app.directive('orsFooter', function () {
	return {
		restrict: 'E',
		template: orsFooterUrl
	};
});


