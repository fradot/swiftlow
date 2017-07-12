describe('MainInput', function () {
  let element,scope;

  beforeEach(angular.mock.module(('swiftlow')));

  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    element = angular.element('<maininput></maininput>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should render the input', () => {
    let input = element.find('input');
    expect(input.length).toBeGreaterThan(0);
  });

});
