(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
            controller: function OrsStarCtrl($element){
                'ngInject';
                console.log('inside controller', arguments);
            }
		};
	});

})();
