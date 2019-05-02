import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/moudules/register-dialog/services/stepper.service';
import { Step } from 'src/app/components/stepper/step';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {
  public steps: Step[];
  constructor(private stepperService: StepperService) { }

  ngOnInit(): void {
    this.steps = this.stepperService.getSteps();
  }
}
