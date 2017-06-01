class SwiftlowHeaderController {
  constructor(SwiftlowConstants) {
    'ngInject';

    this.appName = SwiftlowConstants.appName;
  }
}

let SwiftlowHeader = {
  controller: SwiftlowHeaderController,
  templateUrl: 'layout/header.html'
};

export default SwiftlowHeader;
