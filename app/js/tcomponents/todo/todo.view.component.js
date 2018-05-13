import TComponentController from '../tcomponent.controller';

class TodoViewController extends TComponentController {
  constructor() {
    'ngInject';
    super();

  }

  update() {
    super.update();
  }

}

let TodoView = {
  controller: TodoViewController,
  templateUrl: 'tcomponents/todo/view.html',
  bindings: {
    onUpdate: '&',
    data: '='
  }
};

export default TodoView;
