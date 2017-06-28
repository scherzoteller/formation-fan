const app = angular.module('ors-star', []);

app.directive('orsStar', function () {
	return {
		restrict: 'E',
		scope: {
			note: '=?'
		},
		controller: function OrsStarCtrl($scope, $element, $compile) {
			'ngInject';
			console.log('OrsStarCtrl', arguments);
			$scope.update = function update(newNote) {
				console.log('newNote', newNote);
				$scope.note = newNote;
			};
			$scope.$watch('note', function () {
				console.log('test à chaud');
				let note = $scope.note || 3;
				note = (note > 5) ? 5 : note;
				note = (note < 0) ? 0 : note;
				let html = '';
				for (let i = 0; i < note; i++) {
					html += '<img ng-click="update(' + (i + 1) + ')" src="./ors-star/img/yellow_star.png">';
				}
				for (let i = note; i < 5; i++) {
					html += `
<img  
ng-click="update(${i + 1})" 
src="./ors-star/img/white_star.png">`;
				}
				$element.html(html);
				$compile($element.contents())($scope);
			});

		}
	};
});


