describe('TComponents Service', function() {
  var TComponentsService;

 beforeEach(angular.mock.module('swiftlow'));

 beforeEach(inject((_TComponentsService_) => {
    TComponentsService = _TComponentsService_;
 }));

  it('should exist', () => {
    expect(TComponentsService).toBeDefined();
  });

  it('should return all tcomponents', () => {
    var tcomponents = TComponentsService.all();

    expect(tcomponents).toBeDefined();
    expect(tcomponents.length).toBeGreaterThan(0);
  });

});
