export default class TimelineController {

  constructor(UsersService) {

    'ngInject';

    this.users = UsersService.all();
  }

}
