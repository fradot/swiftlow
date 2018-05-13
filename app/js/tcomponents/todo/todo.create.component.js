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

    this.initDatePicker();

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

  initDatePicker(){
    let self = this;

    this.today = function() {
      self.dt = new Date();
    };
    this.today();

    this.clear = function () {
      self.dt = null;
    };

    // Disable weekend selection
    this.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    this.toggleMin = function() {
      self.minDate = self.minDate ? null : new Date();
    };
    this.toggleMin();

    this.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      self.opened = true;
    };

    this.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    this.initDate = new Date('2016-15-20');
    this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    this.format = this.formats[0];
  }

  initValues(group){
    this.tDueDate = group[2];
    this.tTime = group[3] +
      ((group[4] !== undefined) ? ':' + group[4] : '') +
      ((group[5] !== undefined) ? ':' + group[5] : '');
    this.tText = group[6];

    if(this.tDueDate === ""){throw "Todo due date not defined.";}
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
