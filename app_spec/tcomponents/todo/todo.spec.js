describe('Todo Tcomponent', function () {
  let element,scope;
  let todo = {
    id: 1,
    type: 'todo',
    raw: ":todo 19 Feb 2019 at 19:01 rename the class Intersection.java to IntesectionPoint.java.",
    tcompid: 1,
    taction: 'create',
    created: new Date().toString()
  };

  beforeEach(angular.mock.module(('swiftlow')));

  beforeEach(inject(($rootScope, $compile) => {
    scope = $rootScope.$new();
    scope.todo = todo;
    scope.updateTodo = jasmine.createSpy();
    let temp = angular.element('<todo-create data="todo" on-update="updateTodo(todo)" class="tobj todo"/>');
    element = $compile(temp)(scope);
    scope.$apply();
  }));

  afterEach(function() {
    scope.$destroy();
  });

  it('should create a precompiled todo form.', () => {
    let checkboxEl = element.find('input[name="closed"]');
    let ctrl = element.controller('todo-create');

    expect(ctrl.tText).toEqual('rename the class Intersection.java to IntesectionPoint.java.');
    expect(checkboxEl).not.toBeChecked();
    expect(ctrl.tDueDate.getTime()).toEqual(new Date('19 Feb 2019 19:01').getTime());
  });

  // TODO create spec for different date and time specification
  
});
