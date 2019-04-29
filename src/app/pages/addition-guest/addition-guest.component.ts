import { Component, OnInit } from '@angular/core';
import { Pages } from '../pages';
import { UserSessionService } from 'src/app/shared/user-session.service';
import { StepperService } from 'src/app/component-service/stepper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addition-guest',
  templateUrl: './addition-guest.component.html',
  styleUrls: ['./addition-guest.component.scss']
})
export class AdditionGuestComponent extends Pages implements OnInit {
  stepId = 3;

  constructor(
    public userSessionService: UserSessionService,
    public stepperService: StepperService,
    public router: Router) {
      super(userSessionService, stepperService, router);
  }

  ngOnInit() {
    this.toCurrentStep();
  }

  nextStep() {
    return;
  }
}
