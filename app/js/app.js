import angular from 'angular';
import swiftlowConstants from './config/app.constants';
import swiftlowConfig from './config/app.config';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-ui-router';
import 'angular-touch';
import 'angular-bootstrap';

import './layout';
import './services';
import './filters';
import './timeline';
import './partials';

const requires = [
  'ui.router',
  'app.services',
  'app.filters',
  'app.layout',
  'app.timeline',
  'app.partials',
  'ui.bootstrap',
  'ngMaterial'
];


export default angular.module('swiftlow', requires)
        .constant('SwiftlowConstants', swiftlowConstants)
        .config(swiftlowConfig);


angular.bootstrap(document, ['swiftlow'], {
  strictDi: true
});
