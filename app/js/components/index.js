import angular from 'angular';

let componentsModule = angular.module('app.components',[]);

import Editor from './editor/editor.component';
componentsModule.component('editor',Editor);

export default componentsModule;
