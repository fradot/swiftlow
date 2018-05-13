class MainInputController {
  constructor(TComponentsService) {
    'ngInject';

    var self = this;

    self.tobjraw = {};
    self.tsetid = 1;
    self.tcomponents = TComponentsService.getTsetComponents(self.tsetid);
    self.tcomponents.forEach((tcomp) => {
      if(tcomp && tcomp.regexp.length !== 0) {
        tcomp.regexpinstance = new RegExp(tcomp.regexp);
      }
    });
  }

  onPost() {
    this.onUpdate({tObjRaw: this.tobjraw});
  }

  onChange(tObjRaw) {
    let matches = this.tcomponents.filter(
      (tcomp) => tObjRaw.match(tcomp.regexpinstance)
    );

    if (matches.length === 1) {
      this.tobjraw = {
        id: Math.ceil(Math.random() * 1000),
        type: matches[0].name,
        raw: tObjRaw,
        tcompid: matches[0].id,
        taction: "create",
        created: new Date().toString()
      };
    } else if (matches.length > 1) {
      // TODO: create choice component
    } else if (matches.length === 0) {
      // TODO: show interesting things to do (suggestions).
    }
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
