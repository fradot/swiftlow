describe('Todo Tcomponent', function () {
  let element,scope;
  let todo = {
    id: 1,
    type: 'todo',
    raw: ":todo 19 february 2019 at 19:01 rename the class Intersection.java to IntesectionPoint.java.",
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
    let inputEl = element.find('textarea[name="description"]');
    expect(checkboxEl.length).toBeGreaterThan(0);
    expect(inputEl.length).toBeGreaterThan(0);
    expect(inputEl.val()).toEqual("rename the class Intersection.java to IntesectionPoint.java.");
    expect(checkboxEl).not.toBeChecked();
  });
});
