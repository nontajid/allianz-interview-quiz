import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/component-service/stepper.service';
import { Router } from '@angular/router';
import { UserSessionService } from 'src/app/shared/user-session.service';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})
export class TermComponent implements OnInit {
  private stepId: number = 1;
  public agreeTerm: boolean;
  public errorMessage: string | boolean = false;

  constructor(
    private stepperService: StepperService,
    private userSessionService: UserSessionService,
    private router: Router) { }

  ngOnInit() {
    const userStep = this.userSessionService.getUserStep();
    if (userStep > this.stepId) this.nextStep(); 
    this.stepperService.activeStep(this.stepId);
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

  nextStep() {
    this.userSessionService.setUserStep(this.stepId + 1);
    this.stepperService.completeStep(this.stepId);
    this.router.navigate([this.stepperService.getStep(this.stepId + 1).url]);
  }
}
