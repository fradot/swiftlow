import angular from 'angular';

let TimelineModule = angular.module('app.timeline', []);

import TimelineConfig from './timeline.config';
TimelineModule.config(TimelineConfig);

// Controllers
import TimelineController from './timeline.controller';
TimelineModule.controller('TimelineController', TimelineController);

import TimelineEditor from './editor.component';
TimelineModule.component('timelineEditor', TimelineEditor);

export default TimelineModule;
