export default class TComponentController {
  constructor(TComponentsService) {
    'ngInject';
  }

  update() {
    this.onUpdate({tObj: this.data});
  }
}
