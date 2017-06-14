describe('Timeline', function() {
  var TimelineController,UsersService;

  beforeEach(angular.mock.module('swiftlow'));

  beforeEach(inject(($controller,_UsersService_) => {
    TimelineController = $controller('TimelineController');
    UsersService = _UsersService_;
  }));

  it('should exist', () => {
    expect(TimelineController).toBeDefined();
  });

  it('should contain an array of users', () => {
    expect(TimelineController.users).toBeDefined();
    expect(TimelineController.users.length).toBeGreaterThan(1);
  });

  // TODO: it should display the editor

});
