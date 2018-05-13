export default class TimelineController {

  constructor(UsersService,$uibModal,TObjectsService) {

    'ngInject';

    this.users = UsersService.all();
    this._uibModal = $uibModal;
    this.tObjs = TObjectsService.all();

  }

  ontObjUpdate(tObj) {
    console.log(tObj);
  }

  onPost(tObjRaw) {
    console.log(this.tObjs);
    this.tObjs.push(tObjRaw);
    // TODO: scroll as soon as a new element is added
  }

  createTObj() {

  }

}
