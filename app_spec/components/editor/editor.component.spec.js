describe('Editor', function () {
  var element,scope;

  beforeEach(angular.mock.module(('swiftlow')));

  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('<editor></editor>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should render the editor', function() {
    //var textAngular = element.find('text-angular');
    //expect(textAngular.length).toBeGreaterThan(0);
    // TODO switch to tinymce
  });

});
