(function () {
    'use strict';

    var app = angular.module('ors-star', []);

    app.directive('orsStar', function () {
        return {
            restrict: 'E',
            scope: {
                note: '=?',
                noteMax: '=?'
            },
            controller: function OrsStarCtrl($scope, $element) {
                'ngInject';
                console.log('inside controller', arguments);
                let html = '';
                let note = $scope.note || 0;
                let noteMax = $scope.noteMax || 5;
                for (let i = 0; i < note; i++) {
                    console.log('yellow');
                    html += '<img src="ors-star/img/yellow_star.png"/>';
                }
                for (let i = note; i < noteMax; i++) {
                    console.log('white');
                    html += '<img src="ors-star/img/white_star.png"/>';
                }
                $element.html(html);
            }
        };
    });

})();
