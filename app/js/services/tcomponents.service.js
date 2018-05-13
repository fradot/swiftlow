export default class TComponentsService {

    constructor() {

    }

    all () {
      return [
        {
          id:1,
          name:"todo",
          description: "create a todo",
          created: "10/07/2017 17:00:50",
          regexp:"^(:todo\\s(today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday|[0-9]{1,2}(?:\\/[0-9]{1,2}\\/|\\sjanuary\\s|\\sfebruary\\s|\\smarch\\s|\\sapril\\s|\\smay\\s|\\sjune\\s|\\sjuly\\s|\\saugust\\s|\\sseptember\\s|\\soctober\\s|\\snovember\\s|\\sdecember\\s)[0-9]{2,4})\\s?at?\\s?(?:(?:([01]?\\d|2[0-3]):)?([0-5]?\\d):)?([0-5]?\\d)\\s(.*)?)$",
          nlpexp:'',
          tset: [1],
          taction:[
            {
              "view": {
                "id":/^[0-9]+$/
              }
            },
            {
              "create":{
                "id":null
              }
            }
          ]
        },
        {
          id:2,
          name:"note",
          description: "save a note",
          created: "10/07/2017 17:01:50",
          regexp:`^(NOTE)$`,
          nlpexp:'',
          tset: [1,2]
        },
        {
          id:3,
          name:"trip",
          description: "book a trip",
          created: "10/07/2017 17:01:50",
          regexp:`^(TRIP)$`,
          nlpexp:'',
          tset: [3]
        }
      ];
    }

    getTcomponent(tCompId) {
      return this.all().filter((tc) => tc.id === tCompId);
    }

    getTsetComponents(tSetId) {
      return this.all().filter((tc) => {
        for(var i=0; i < tc.tset.length; i++)
          if(tc.tset[i] === tSetId) return true;
      });
    }

}
