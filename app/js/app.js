import angular from 'angular';
import appConstants from './config/app.constants';
import appConfig from './config/app.config';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-ui-router';
import 'angular-touch';
import 'angular-bootstrap';

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
  // 'ui.bootstrap'
];

export default angular.module('swiftlow', requires)
        .constant('AppConstants', appConstants)
        .config(appConfig);


angular.bootstrap(document, ['swiftlow'], {
  strictDi: true
});
