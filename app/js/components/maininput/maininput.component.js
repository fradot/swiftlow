class MainInputController {
  constructor() {
    'ngInject';

    this.content = "Type here...";

  }
}

let MainInput = {
  controller: MainInputController,
  templateUrl: 'components/maininput/maininput.html',
  content:'='
};

export default MainInput;
