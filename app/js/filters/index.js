import angular from 'angular';

let filtersModule = angular.module('app.filters', []);

import capitalizeFilter from './capitalize.filter';
filtersModule.filter('capitalize', capitalizeFilter);

export default filtersModule;
