(function () {
    'use strict';

    var app = angular.module('ors-star', []);

    app.directive('orsStar', function () {
        return {
            restrict: 'E',
            scope: {
                // double data binding
                note: '=?',
                noteMax: '=?'
                // simple data binding (don't propagate to outside)
                /*note: '<?',
                noteMax: '<?'*/
            },
            controller: function OrsStarCtrl($scope, $element, $compile) {
                'ngInject';
                console.log('inside controller', arguments);
                $scope.updateNote = function updateNote(newNote) {
                    console.log('new note: ', newNote);
                    $scope.note = newNote;
                };
                $scope.$watch('note', function callB() {
                    let html = '';
                    let note = $scope.note || 0;
                    let noteMax = $scope.noteMax || 5;
                    if (note > 5) note = 5;
                    if (note < 0) note = 0;
                    for (let i = 0; i < note; i++) {
                        html += '<img ng-click="updateNote(' + (i + 1) + ')" src="ors-star/img/yellow_star.png"/>';
                    }
                    for (let i = note; i < noteMax; i++) {
                        // notation ES6
                        html += `<img ng-click="updateNote(${i + 1})" src="ors-star/img/white_star.png"/>`;
                    }
                    $element.html(html);
                    // recompile html code that was generated in that function (otherwise updateNote won't be recognized)
                    $compile($element.contents())($scope);
                });
            }
        };
    });

})();
