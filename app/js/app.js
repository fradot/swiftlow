import angular from 'angular';
import appConstants from './config/app.constants';
import appConfig from './config/app.config';
import 'angular-ui-router';

import './services';
import './home';
import './partials';

const requires = [
  'ui.router',
  'app.services',
  'app.home',
  'app.partials'
];

export default angular.module('swiftlow', requires)
        .constant('AppConstants', appConstants)
        .config(appConfig);


angular.bootstrap(document, ['swiftlow'], {
  strictDi: true
});
