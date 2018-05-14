import angular from 'angular';
import swiftlowConstants from './config/app.constants';
import swiftlowConfig from './config/app.config';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-ui-router';
import 'angular-touch';
import 'angular-ui-bootstrap';

import './layout';
import './services';
import './filters';
import './timeline';
import './partials';
import './components';
import './tcomponents';
import './directives';


const requires = [
  'ui.router',
  'ui.bootstrap',
  'app.services',
  'app.filters',
  'app.layout',
  'app.timeline',
  'app.partials',
  'app.components',
  'app.directives',
  'app.tcomponents',
  'ngMaterial'
];


export default angular.module('swiftlow', requires)
        .constant('SwiftlowConstants', swiftlowConstants)
        .config(swiftlowConfig);


angular.bootstrap(document, ['swiftlow'], {
  strictDi: true
});
