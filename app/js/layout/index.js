import angular from 'angular';

let layoutModule = angular.module('app.layout', []);

// Components
import SwiftlowHeader from './header.component';
layoutModule.component('swiftlowHeader', SwiftlowHeader);

import SwiftlowFooter from './footer.component';
layoutModule.component('swiftlowFooter', SwiftlowFooter);

import SwiftlowAside from './aside.component';
layoutModule.component('swiftlowAside', SwiftlowAside);


export default layoutModule;
