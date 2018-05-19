import angular from 'angular';
import swiftlowConstants from './config/app.constants';
import swiftlowConfig from './config/app.config';
import 'angular-aria';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-material';
import 'angular-ui-router';
import 'angular-touch';
import 'angular-ui-bootstrap';

// TinyMCE editor
import tinymce from 'tinymce';
import 'angular-ui-tinymce';
tinymce.baseURL = 'vendor/tinymce';

// App
import './layout';
import './services';
import './filters';
import './timeline';
import './partials';
import './components';
import './tcomponents';
import './directives';

const requires = [
  'ngAnimate',
  'ngSanitize',
  'ngMaterial',
  'ui.router',
  'ui.tinymce',
  'ui.bootstrap',
  'app.services',
  'app.filters',
  'app.layout',
  'app.timeline',
  'app.partials',
  'app.components',
  'app.directives',
  'app.tcomponents'
];

export default angular.module('swiftlow', requires)
        .constant('SwiftlowConstants', swiftlowConstants)
        .config(swiftlowConfig);

angular.bootstrap(document, ['swiftlow'], {
  strictDi: true
});
