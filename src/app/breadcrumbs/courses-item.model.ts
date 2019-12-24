interface CoursesItems {
  id: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: [
    {
      id: number;
      firstName: string;
      lastName: string;
    }
  ]
}

export class CoursesItem implements CoursesItems {
  id: number;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: [
    {
      id: number;
      firstName: string;
      lastName: string;
    }
  ]

  constructor(itemId: number,
              itemTitle: string,
              itemDate: Date,
              itemDuration: number,
              itemDescription: string,
              itemTopRated: boolean,
              itemAuthorId: number,
              itemFirstName: string,
              itemLastName: string) {

    this.id = itemId;
    this.name = itemTitle;
    this.date = itemDate;
    this.length = itemDuration;
    this.description = itemDescription;
    this.isTopRated = itemTopRated;
    this.authors[0].id = itemAuthorId;
    this.authors[0].firstName = itemFirstName;
    this.authors[0].lastName = itemLastName;

  }

}
