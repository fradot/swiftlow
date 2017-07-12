export default class TObjectsService {

    constructor() {}

    all () {
      return [
        {
          type:"todo",
          created: "10/07/2017 17:00:50",
          instance: {
              id:1,
              dueDate: "12/07/2017 17:00:50",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              closed: false,
              assignee: "John Doe"
          }
        },
        {
          type:"todo",
          created: "11/07/2017 13:00:00",
          instance: {
              id:2,
              dueDate: "13/07/2017 13:00:00",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              closed: true,
              assignee: "Jane Doe"
          }
        }
      ];
    }
}
