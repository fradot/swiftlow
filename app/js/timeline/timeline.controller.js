export default class TimelineController {

  constructor(UsersService, TObjectsService, $window) {

    'ngInject';

    this.users = UsersService.all();
    this.tObjs = TObjectsService.all();

  }

  ontObjUpdate(tObj) {
    console.log(tObj);
  }

  onPost(tObjRaw) {
    console.log(this.tObjs);
    this.tObjs.push(tObjRaw);
  }

  delete(tObj) {
    this.tObjs.forEach((tEl, index) => {
      if(tEl.id === tObj.id) {
        this.tObjs.splice(index, 1);
      }
    });
  }

  createTObj() {

  }

}
