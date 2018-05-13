describe('TComponent Directive', function () {
  let element,scope;
  let todo = {
      id:1,
      type:"todo",
      created: "10/07/2017 17:00:50",
      raw: "TODO 12/07/2017 at 17:00:50 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tcompid:1,
      dueDate: "12/07/2017 17:00:50",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      closed: false,
      assignee: "John Doe",
      taction: "view"
  };

  beforeEach(angular.mock.module(('swiftlow')));

  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();
    scope.tObj = todo;
    scope.updateTobj = jasmine.createSpy();
    let temp = angular.element('<tcomponent action="view" tobj="tObj" on-update="updateTobj(tObj)"/>');
    element = $compile(temp)(scope);
    scope.$apply();
  }));

  afterEach(function() {
    scope.$destroy();
  });

  it('should render a tcomponent of type todo', () => {
    let todoTcomponent = element.find('.todo');
    expect(todoTcomponent.length).toBeGreaterThan(0);
  });

  it('should update the tobject after the todo has been closed or opened', () => {

    let expectedtObj = todo;

    let checkbox = $('input[type="checkbox"]',element.find(".todo"));

    // should be true
    expectedtObj.closed = true;
    checkbox.trigger("click");
    expect(scope.updateTobj).toHaveBeenCalledWith(expectedtObj);

    // should be false
    expectedtObj.closed = false;
    checkbox.trigger("click");
    expect(scope.updateTobj).toHaveBeenCalledWith(expectedtObj);

  });

});
