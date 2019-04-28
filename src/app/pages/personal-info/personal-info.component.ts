import { Component, OnInit } from '@angular/core';
import { StepperService } from 'src/app/component-service/stepper.service';
import { MainJoiner } from 'src/app/main-joinner';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  private stepId: number = 2;
  public mainJoiner: MainJoiner = new MainJoiner();

  constructor(private stepperService: StepperService) { }

  ngOnInit() {
    this.stepperService.activeStep(this.stepId);
  }

}
