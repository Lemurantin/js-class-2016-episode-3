//console.log('loading landing app main js...');

import 'angular';
import 'angular-ui-router';
import 'angular-aria';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';
import 'angular-material/angular-material.css!';
import 'angular-material/angular-material.layouts.css!';

import app from 'client/common/incubator/ng-app-bootstrap';

app.global_ng_module_dependencies = ['ui.router', 'ngAria', 'ngAnimate', 'ngMessages', 'ngMaterial'];

//const ng_module = app.global_ng_module; // singleton : access cause creation

// now that global module is ready, load ng modules

window._app.global_ng_module.controller('AppController', ['$scope', function ($scope) {
  //console.info('AppController…');

  // TODO locale
  this.title = window._app.server_title || 'SPA';
}]);

// use more convenient AMD syntax
require([
  'client/exercise-01/content',
  'client/exercise-01/index.css!'
], app.bootstrap);