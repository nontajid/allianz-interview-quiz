import { Component } from '@angular/core';
import { Step } from './components/stepper/step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interview-quiz';

  constructor() { }
}
