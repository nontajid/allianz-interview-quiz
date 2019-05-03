import { Component, OnInit, ViewChild } from '@angular/core';
import { StepperService } from 'src/app/moudules/register-dialog/services/stepper.service';
import { Step } from 'src/app/components/stepper/step';
import { StepperComponent } from 'src/app/components/stepper/stepper.component';
import { NxMultiStepperComponent } from '@allianz/ngx-ndbx/progress-stepper/public-api';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {
  public steps: Step[];
  private stepperElement: NxMultiStepperComponent;

  @ViewChild('appStepper') appStepper: StepperComponent;

  constructor(private stepperService: StepperService) { }

  ngOnInit(): void {
    this.stepperElement = this.appStepper.stepperElement;
    this.stepperService.setStepper(this.stepperElement);
    this.steps = this.stepperService.getSteps();
  }

  ngAfterViewInit(): void {
    this.stepperService.viewInit();    
  }
}
