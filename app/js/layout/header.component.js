class SwiftlowHeaderController {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
  }
}

let SwiftlowHeader = {
  controller: SwiftlowHeaderController,
  templateUrl: 'layout/header.html'
};

export default SwiftlowHeader;
