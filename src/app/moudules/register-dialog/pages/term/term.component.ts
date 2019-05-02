import { Component, OnInit } from '@angular/core';
import { UserSessionService } from 'src/app/shared/user-session.service';
import { Pages } from '../pages';
import { StepperService } from 'src/app/moudules/register-dialog/services/stepper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})
export class TermComponent extends Pages implements OnInit {
  public stepId = 1;
  public agreeTerm: boolean;
  public errorMessage: string | boolean = false;

  constructor(
    public userSessionService: UserSessionService,
    public stepperService: StepperService,
    public router: Router) {
      super(userSessionService, stepperService, router);
  }

  ngOnInit() {
    this.toCurrentStep();
  }

  agree() {
    if (this.agreeTerm === true) {
      this.errorMessage = false;
      this.userSessionService.setUserStep(this.stepId);
      this.nextStep();
    } else {
      this.errorMessage = "please accept term and condition";
    }
  }

}
