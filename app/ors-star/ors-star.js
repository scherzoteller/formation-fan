(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
            controller: function OrsStarCtrl(){
                console.log('inside controller');
            }
		};
	});

})();
