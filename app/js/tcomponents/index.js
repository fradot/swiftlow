import angular from 'angular';

let tComponentsModule = angular.module('app.tcomponents',[]);

import Todo from './todo/todo.component';
tComponentsModule.component('todo',Todo);

export default tComponentsModule;
