describe('TComponent Directive', function () {
  let element,scope,
  todoTobj = {
    type:"todo",
    created: "11/07/2017 13:00:00",
    instance: {
        id:2,
        dueDate: "13/07/2017 13:00:00",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        closed: false,
        assignee: "Jane Doe"
    }
  };

  beforeEach(angular.mock.module(('swiftlow')));

  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();
    scope.tObj = todoTobj;
    scope.updateTobj = jasmine.createSpy();
    element = angular.element('<tcomponent tobj="tObj" on-update="updateTobj(tObj)"/>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  afterEach(function() {
    scope.$destroy();
  });

  it('should render a tcomponent of type todo', () => {
    let todoTcomponent = element.find('todo');
    expect(todoTcomponent.length).toBeGreaterThan(0);
  });

  it('should update the tobject after the todo has been closed or opened', () => {

    let expectedtObj = todoTobj.instance;

    let checkbox = $('input[type="checkbox"]',element.find("todo"));
    
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
