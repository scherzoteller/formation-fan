(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () { 
		return {
			restrict: 'E',
            controller: function OrsStarCtrl($element){
                'ngInject';
                console.log('inside controller', arguments);
                let html = '';
                let note = 3;
                let noteMax = 5;
                for(let i=0; i<note; i++){
                    console.log('yellow');
                    html += '<img src="ors-star/img/yellow_star.png"/>';
                }
                for(let i=note; i<noteMax; i++){
                    console.log('white');
                    html += '<img src="ors-star/img/white_star.png"/>';
                }
                $element.html(html);
            }
		};
	});

})();
