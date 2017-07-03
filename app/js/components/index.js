import angular from 'angular';

let componentsModule = angular.module('app.components',[]);

import Editor from './editor/editor.component';
componentsModule.component('editor',Editor);

import MainInput from './maininput/maininput.component';
componentsModule.component('maininput',MainInput);

export default componentsModule;
