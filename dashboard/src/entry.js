import 'normalize.css';

import * as angular from 'angular';
import AppCtrl from './app';
import SummaryCtrl from './summary/summary';
import ListCtrl from './list/list';
import foo from './../../assets/components/foo/foo';

// Vanilla javascript to add the app, controller and the template
// This allows us to keep no logic in the parent html
// TODO: Test this on build
var tpl = '<div ng-include="\'./src/app.htm\'"></div>';
var div = document.createElement('div');
div.innerHTML = '<div ng-app="app">'+tpl+'</div>';
document.getElementsByTagName('body')[0].appendChild(div);

angular
	.module('app', [foo])
	.controller('AppCtrl', AppCtrl)
	.controller('SummaryCtrl', SummaryCtrl)
	.controller('ListCtrl', ListCtrl);