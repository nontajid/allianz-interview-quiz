import { Injectable } from '@angular/core';
import { Step } from '../basic/stepper/step';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  private steps: Step[] = [
    {
      id: 1,
      label: "1",
      active: false,
      complete: false
    },
    {
      id: 2,
      label: "2",
      active: false,
      complete: false
    },
    {
      id: 3,
      label: "3",
      active: false,
      complete: false
    }
  ];

  getSteps() {
    return this.steps;
  }

  completeStep(id: number): void {
    const step = this.steps.find(step => step.id === id);
    step.complete = true;
  }

  activeStep(id: number) {
    this.steps.forEach(step => {
      if (step.id === id) {
        step.active = true;
      } else {
        step.active = false;
      }
    });
  }
}
