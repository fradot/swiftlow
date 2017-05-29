function TimelineConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.timeline', {
    url: '/',
    controller: 'TimelineController',
    controllerAs: '$ctrl',
    templateUrl: 'timeline/timeline.html',
    title: 'Timeline'
  });

}

export default TimelineConfig;
