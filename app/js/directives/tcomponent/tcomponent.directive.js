class TComponentController {
  constructor() {
    'ngInject';
  }
}

let TComponentDirective = function($compile) {
  'ngInject';

  return {
    restrict: 'E',
    controllerAs: '$ctrl',
    transclude: true,
    link: function (scope, element, attrs, ctrl) {
      scope.$watch(attrs.tobj, function(tObj) {
        let tobjAttr =' tobj="tObj" ';
        let onUpdateAttr = 'on-update="'.concat(attrs.onUpdate).concat('" ');
        let klass = 'class="tobj ' + tObj.type + '" ';

        // building component
        element.html('<'.concat(tObj.type)
                        .concat(tobjAttr)
                        .concat(onUpdateAttr)
                        .concat(klass)
                        .concat('/>'));
                        
        $compile(element.contents())(scope);
      });
    }
  };
};

export default TComponentDirective;
