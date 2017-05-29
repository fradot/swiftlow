import angular from 'angular';

let TimelineModule = angular.module('app.timeline', []);

import TimelineConfig from './timeline.config';
TimelineModule.config(TimelineConfig);

// Controllers
import TimelineController from './timeline.controller';
TimelineModule.controller('TimelineController', TimelineController);


export default TimelineModule;
