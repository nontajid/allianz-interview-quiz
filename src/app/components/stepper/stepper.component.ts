import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Step } from './step';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  exportAs: 'appStepper'
})
export class StepperComponent implements OnInit {
  @ViewChild('stepperElement') stepperElement;
  @Input() steps: Step[];

  constructor() { }

  ngOnInit() { }
}
