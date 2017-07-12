const tconstants = {
  CLASS_ATTR: 'class="tobj ',
  TOBJ_ATTR: ' tobj="tObj" ',
  ON_UPDATE_ATTR: 'on-update="'
};

let TComponentDirective = function($compile) {
  'ngInject';

  return {
    restrict: 'E',
    controllerAs: '$ctrl',
    transclude: true,
    link: function (scope, element, attrs, ctrl) {
      scope.$watch(attrs.tobj, function(tObj) {
        let tobjAttr = tconstants.TOBJ_ATTR;
        let onUpdateAttr = tconstants.ON_UPDATE_ATTR.concat(attrs.onUpdate).concat('" ');
        let klass = tconstants.CLASS_ATTR.concat(tObj.type).concat('" ');

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
