import angular from 'angular';

let tComponentsModule = angular.module('app.tcomponents',[]);

import TodoView from './todo/todo.view.component';
import TodoCreate from './todo/todo.create.component';

tComponentsModule.component('todoView', TodoView);
tComponentsModule.component('todoCreate', TodoCreate);

export default tComponentsModule;
