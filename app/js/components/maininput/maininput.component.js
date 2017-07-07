class MainInputController {
  constructor() {
    'ngInject';
  }

  onPost() {
    this.onUpdate({instruction: this.instruction});
  }

}

let MainInput = {
  controller: MainInputController,
  templateUrl: 'components/maininput/maininput.html',
  bindings: {
      onUpdate: '&'
  }
};

export default MainInput;
