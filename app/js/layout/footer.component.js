class SwiftlowFooterController {
  constructor(SwiftlowConstants) {
    'ngInject';

    this.appVersion = SwiftlowConstants.appVersion;

  }
}

let SwiftlowFooter = {
  controller: SwiftlowFooterController,
  templateUrl: 'layout/footer.html'
};

export default SwiftlowFooter;
