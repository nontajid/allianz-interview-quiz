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
      complete: false,
      url: 'term'
    },
    {
      id: 2,
      label: "2",
      active: false,
      complete: false,
      url: 'personal-info'
    },
    {
      id: 3,
      label: "3",
      active: false,
      complete: false,
      url: 'addition-guest'
    }
  ];

  getStep(id: number): Step | null {
    return this.steps.find(step => step.id === id) || null;
  }

  getSteps() {
    return this.steps;
  }

  completeStepBefore(stepNumber: number) {
    for (let step = 1; step < stepNumber; step++) {
      this.completeStep(step);
    }
  }

  completeStep(id: number): void {
    const step = this.getStep(id);
    if (step) {
      step.complete = true;
    }
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
