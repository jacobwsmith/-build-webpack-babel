import * as angular from 'angular';

function foo(){
    return {
        restrict: 'E',
        link: function() {

        },
        template: '<span class="foo">YES!</span>'
    };
}

export default angular.module('foo', [])
    .directive('foo', foo).name;