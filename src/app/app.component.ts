import { Component, OnInit } from '@angular/core';
import { Step } from './basic/stepper/step';
import { StepperService } from './component-service/stepper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public steps: Step[];
  title = 'interview-quiz';

  constructor(public stepperService: StepperService) { }

  ngOnInit(): void {
    this.steps = this.stepperService.getSteps();
  }
}
