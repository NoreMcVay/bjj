export class Fighter {

    constructor(
        public firstname: string = '',
        public surname: string = '',
        public age: number = 0,
        public belt: string = 'White',
        public stripe: number = 0
    ) { }
}

export interface FighterInterface {
    firstname: string;
    surname: string;
    age: number;
    belt: string;
    stripe: number;
}
