class EditorController {
  constructor() {
    'ngInject';

    this.content = "Type here...";

  }
}

let Editor = {
  controller: EditorController,
  templateUrl: 'components/editor/editor.html',
  content:'='
};

export default Editor;
