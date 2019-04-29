import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Joiner } from './model/joiner';
import { MainJoiner } from './model/main-joiner';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const mainjoinner = [
      {id: 1, name: 'Nontajid Pantarak', email: 'nontajid@gmail.com', dateOfBirth: '1/1/1994'}
    ];

    const joiner = [
      {id: 1, mainJoinerId: 1, name: 'TestUser'}
    ];

    return {mainjoinner, joiner};
  }

  genId<T extends Joiner | MainJoiner >(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
