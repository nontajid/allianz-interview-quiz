import { Person } from './person';

export class MainJoiner extends Person {
  public static minAge = 18;

  constructor(
    public name: string,
    public email: string,
    public dateOfBirth: Date) {
      super(name);
    }
}
