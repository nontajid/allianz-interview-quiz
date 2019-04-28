import { Person } from './person';

export class Joiner extends Person {
    constructor(
        public name: string,
        public mainJoinnerId: number
    ) {
        super(name);
    }
}
