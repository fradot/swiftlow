import angular from 'angular';
import appConstants from './config/app.constants';
import appConfig from './config/app.config';
import ngAria from '../vendor/angular-aria/angular-aria.js';
import ngAnimate from '../vendor/angular-animate/angular-animate.js';
import ngMaterial from '../vendor/angular-material/angular-material.js';
import 'angular-ui-router';

import './layout';
import './services';
import './home';
import './partials';

const requires = [
  'ui.router',
  'app.services',
  'app.layout',
  'app.home',
  'app.partials',
  'ngMaterial'
];

export default angular.module('swiftlow', requires)
        .constant('AppConstants', appConstants)
        .config(appConfig);


angular.bootstrap(document, ['swiftlow'], {
  strictDi: true
});
