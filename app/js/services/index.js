import angular from 'angular';

let servicesModule = angular.module('app.services', []);

import UsersService from './users.service';
servicesModule.service('UsersService', UsersService);

import TObjectsService from './tobjects.service';
servicesModule.service('TObjectsService', TObjectsService);

import TComponentsService from './tcomponents.service';
servicesModule.service('TComponentsService', TComponentsService);


export default servicesModule;
