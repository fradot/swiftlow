export default class TimelineController {

  constructor(UsersService,$uibModal) {

    'ngInject';

    this.users = UsersService.all();
    this._uibModal = $uibModal;
    this.instruction = null;
  }

  onPost(instruction) {
    this.instruction = instruction;
  }

  //openEditorModal () {
  //   this._uibModal.open({
  //     ariaLabelledBy: 'modal-title',
  //     ariaDescribedBy: 'modal-body',
  //     animation: true,
  //     component: 'editor'
  //   });
  // }

}
