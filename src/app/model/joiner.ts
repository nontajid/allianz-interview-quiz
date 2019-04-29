import { Person } from './person';

export class Joiner extends Person {
    constructor(
        public name: string,
        public mainJoinerId: number
    ) {
        super(name);
    }
}
