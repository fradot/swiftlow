export default class TObjectsService {

    constructor() {}

    all () {
      return [
        {
          id:1,
          type:"todo",
          created: "10/07/2017 17:00:50",
          raw: "TODO 12/07/2017 at 17:00:50 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          tcompid:1,
          dueDate: "12/07/2017 17:00:50",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          closed: false,
          assignee: "John Doe",
          taction: "view"
        },
        {
          id:2,
          type:"todo",
          created: "11/07/2017 13:00:00",
          raw: "TODO 13/07/2017 at 13:00 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          tcompid:1,
          dueDate: "13/07/2017 13:00:00",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          closed: true,
          assignee: "Jane Doe",
          taction: "view"
        }
      ];
    }
}
