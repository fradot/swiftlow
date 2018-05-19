import TComponentController from '../tcomponent.controller';

class TodoCreateController extends TComponentController {
  constructor(TComponentsService) {
    'ngInject';
    super();

    this.tComponentsService = TComponentsService;
  }

  $onInit() {
    let tcomp = this.tComponentsService.getTcomponent(this.data.tcompid);
    let raw = this.data.raw;
    let regexp = new RegExp(tcomp[0].regexp,'g'); // TODO: double slashes needed to make it work.
    let group;

    this.initEditor(); // TODO switch to the component editor
    this.initDatePicker(); // TODO create a specific component

    while((group = regexp.exec(raw)) !== null) {
      try {
        this.initValues(group);
      } catch(e) {
        console.log(e);
      }
    }
    if(group === null) {
      // show todo contextual help
    }
  }

  initEditor(){
    this.tinymceOptions = {
      plugins: 'link code',
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    };
  }

  initDatePicker(){
    this.toggleMin();

    this.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    this.format = 'dd MMMM yyyy';
    this.opened = false;
  }

  clear() {
    this.tDueDate = null;
  }

  disabled(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  }

  toggleMin() {
    this.minDate = this.minDate ? null : new Date();
  }

  open($event) {
    $event.preventDefault();
    $event.stopPropagation();

    this.opened = true;
  }

  initValues(group){
    let todayDate = new Date();

    this.tTime = group[4] +
      ((group[5] !== undefined) ? ':' + group[5] : '') +
      ((group[6] !== undefined) ? ':' + group[6] : '');
    this.tText = group[7];

    if(group[2] === ""){
      throw "Todo due date not defined.";
    } else {
        this.tDueDate = new Date(group[2]);
    }
    if(this.tText === ""){throw "Todo text not defined.";}
    if(this.tTime === "" || /(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)/g.exec(this.tTime) === null) {
      throw "Todo wrong due time definition.";
    }
  }

  update() {
    super.update();
  }


}

let TodoCreate = {
  controller: TodoCreateController,
  templateUrl: 'tcomponents/todo/edit.html',
  bindings: {
    onUpdate: '&',
    data: '='
  }
};

export default TodoCreate;
