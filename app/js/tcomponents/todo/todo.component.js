class TodoController {
  constructor() {
    'ngInject';

    this.data = null;

    this.$onInit = function() {
      this.data = this.tobj.instance;
    };
  }

  setClosed(closed) {
    this.data.closed = closed;
    this.update();
  }

  update() {
    this.onUpdate({tObj: this.data});
  }
}

let Todo = {
  controller: TodoController,
  templateUrl: 'tcomponents/todo/todo.html',
  bindings: {
    onUpdate: '&',
    tobj: '='
  }
};

export default Todo;
