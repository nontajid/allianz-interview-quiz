import { Component, OnInit } from '@angular/core';
import { UserSessionService } from 'src/app/shared/user-session.service';
import { StepperService } from 'src/app/component-service/stepper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addition-guest',
  templateUrl: './addition-guest.component.html',
  styleUrls: ['./addition-guest.component.scss']
})
export class AdditionGuestComponent implements OnInit {
  private stepId = 3;
  constructor(
    private userSessionService: UserSessionService,
    private stepperService: StepperService,
    private router: Router
  ) { }

  ngOnInit() {
    const userStep = this.userSessionService.getUserStep();

    if(userStep > this.stepId) {
      this.nextStep();
    } else if (userStep === this.stepId) {
      this.stepperService.completeStepBefore(this.stepId);
      this.stepperService.activeStep(this.stepId);
    } else {
      this.router.navigate([this.stepperService.getStep(userStep).url]);
    }
  }

  nextStep() {
  }
}
