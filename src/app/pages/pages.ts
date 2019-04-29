import { UserSessionService } from '../shared/user-session.service';
import { StepperService } from '../component-service/stepper.service';
import { Router } from '@angular/router';

export class Pages {
  public stepId: number;

  constructor(
    public userSessionService: UserSessionService,
    public stepperService: StepperService,
    public router: Router
  ) {}

  toCurrentStep() {
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
    this.userSessionService.setUserStep(this.stepId + 1);
    this.stepperService.completeStep(this.stepId);
    this.router.navigate([this.stepperService.getStep(this.stepId + 1).url]);
  }
}