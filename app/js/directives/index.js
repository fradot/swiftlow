import angular from 'angular';

let directivesModule = angular.module('app.directives',[]);

import TComponentDirective from './tcomponent/tcomponent.directive';
directivesModule.directive('tcomponent',TComponentDirective);

export default directivesModule;
