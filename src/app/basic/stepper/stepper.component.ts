import { Component, OnInit, Input } from '@angular/core';
import { Step } from './step';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() steps: Step[];

  constructor() { }

  ngOnInit() {
  }
}
