import { UserSessionService } from '../../../shared/user-session.service';
import { StepperService } from '../services/stepper.service';
import { Router } from '@angular/router';

export class Pages {
  public stepId: number;

  constructor(
    public userSessionService: UserSessionService,
    public stepperService: StepperService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.setStepper();
  }

  setStepper() {
    this.stepperService.activeStep(this.stepId);
    this.stepperService.completeStepBefore(this.stepId);
  }

  nextStep() {
    this.stepperService.activeStep(this.stepId + 1);
    this.userSessionService.setUserStep(this.stepId + 1);
    this.stepperService.completeStep(this.stepId);
    this.router.navigate([this.stepperService.getStep(this.stepId + 1).url]);
  }
}