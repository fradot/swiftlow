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
    this.initTimePicker(); // TODO create a specific component

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
    let time = [];

    this.tText = group[7];

    if(group[2] === ""){
      throw "Todo due date not defined.";
    }

    if(this.tText === ""){
      throw "Todo text not defined.";
    }

    let timeGroup = /(\d{1,2}):?(\d{1,2})?:?(\d{1,2})?/g.exec(group[4] + ':' + group[5] + ':' + group[6]);

    if(timeGroup[1] !== undefined) time.push(timeGroup[1]);
    if(timeGroup[2] !== undefined) time.push(timeGroup[2]);
    if(timeGroup[3] !== undefined) time.push(timeGroup[3]);

    for (var i = 0; i <= 2; i++) {
      if(time[i] === undefined) {
        time[i] = '00';
      }
    }

    this.tDueTime = new Date(group[2] + ' ' + time.join(':'));
    this.tDueDate = this.tDueTime;

  }

  updateData() {
    // TODO join DueDate and DueTime
    super.update();
  }

  initTimePicker(){
    this.hstep = 1;
    this.mstep = 15;

    this.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    this.ismeridian = true;
  }

  toggleMode() {
    this.ismeridian = !this.ismeridian;
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
