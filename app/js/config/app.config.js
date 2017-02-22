function AppConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'js/layout/app-view.html'
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;
