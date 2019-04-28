import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Joiner } from './joiner';
import { MainJoiner } from './main-joiner';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const mainJoinner = [
      {id: 1, name: 'Nontajid Pantarak', email: 'nontajid@gmail.com', dateOfBirth: '1/1/1994'}
    ];

    const joiner = [
      {id: 1, mainJoinnerId: 1, name: 'TestUser'}
    ];

    return {mainJoinner, joiner};
  }

  genId<T extends Joiner | MainJoiner >(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
