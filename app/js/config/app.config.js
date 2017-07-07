function SwiftlowConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'layout/app-view.html'
    });

  $urlRouterProvider.otherwise('/');

}

export default SwiftlowConfig;
