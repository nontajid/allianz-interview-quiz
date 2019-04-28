import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/component-service/stepper.service';
import { Router } from '@angular/router';

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
    private router: Router) { }

  ngOnInit() {
    this.stepperService.activeStep(this.stepId);
  }

  agree() {
    if (this.agreeTerm === true) {
      this.errorMessage = false;
      this.stepperService.completeStep(this.stepId);
      this.router.navigate(['personal-info']);
    } else {
      this.errorMessage = "please accept term and condition";
    }
  }

}
