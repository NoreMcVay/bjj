export class Instructor {

  constructor(
      public firstname: string = '',
      public surname: string = '',
      public age: number = 0,
      public belt: string = 'White',
      public stripe: number = 0,
      public year: string = '',
  ) { }
}

export interface InstructorInterface {
  firstname: string;
  surname: string;
  age: number;
  belt: string;
  stripe: number;
  year: string;
}
