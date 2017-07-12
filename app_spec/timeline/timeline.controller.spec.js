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

  it('should contain an array of tobjects', () => {
    expect(TimelineController.tObjs).toBeDefined();
  });

});
