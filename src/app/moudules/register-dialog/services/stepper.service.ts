import { Step } from '../../../components/stepper/step';
import { NxProgressStepperDirective } from '@allianz/ngx-ndbx/progress-stepper/public-api';

export class StepperService {
  private _stepper: NxProgressStepperDirective;
  private steps: Step[] = [
    {
      id: 1,
      label: "1",
      complete: false,
      url: 'register/term'
    },
    {
      id: 2,
      label: "2",
      complete: false,
      url: 'register/personal-info'
    },
    {
      id: 3,
      label: "3",
      complete: false,
      url: 'register/addition-guest'
    }
  ];

  viewInit() {
    this._stepper.selectionChange.subscribe(data => {
      const selectedStep = <Step>this.steps[data.selectedIndex];
    });
  }

  setStepper(stepper: NxProgressStepperDirective) {
    this._stepper = stepper;
  }

  getStep(id: number): Step | null {
    return this.steps.find(step => step.id === id) || null;
  }

  getSteps(): Step[] {
    return this.steps;
  }

  completeStepBefore(stepNumber: number): void {
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

  activeStep(step: Step | number) {
    if (typeof step === 'number') {
      step = this.steps.find(x => x.id == step);
    }

    const stepIndex = this.steps.indexOf(step);
    if(!step.complete && stepIndex !== 0) {
      this.activeStep(this.steps[stepIndex - 1]);
    }

    const index = this.steps.indexOf(step);
    this._stepper.selectedIndex = index;
  }
}
