export default class TimelineController {

  constructor(UsersService,$uibModal,TObjectsService) {

    'ngInject';

    this.users = UsersService.all();
    this._uibModal = $uibModal;
    this.instruction = null;

    this.tObjs = TObjectsService.all();
  }

  ontObjUpdate(tObj) {
    console.log(tObj);
  }

  onPost(instruction) {
    this.instruction = instruction;
  }

}
