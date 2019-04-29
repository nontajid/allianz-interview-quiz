import { Injectable } from '@angular/core';
import { Session } from './session';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService extends Session {
  constructor() {
    super('user');
  }

  setUserStep(step: number) {
    this.store('userStep', step);
  }

  getUserStep(): number | null {
    return this.get('userStep');
  }
}
