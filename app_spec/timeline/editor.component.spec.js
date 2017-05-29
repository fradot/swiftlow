describe('Editor', function () {
  var element,scope;

  beforeEach(angular.mock.module(('swiftlow')));

  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('<timeline-editor></timeline-editor>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should render the editor', function() {
    var title = element.find('p');
    expect(title.text()).toBe('Creates tasks, notes and other istructions here:');
  });

});
