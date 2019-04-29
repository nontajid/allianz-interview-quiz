import { Component, OnInit } from '@angular/core';
import { Pages } from '../pages';
import { UserSessionService } from 'src/app/shared/user-session.service';
import { StepperService } from 'src/app/component-service/stepper.service';
import { Router } from '@angular/router';
import { MainJoiner } from 'src/app/model/main-joiner';
import { Joiner } from 'src/app/model/joiner';
import { JoinerService } from 'src/app/backend/joiner.service';

@Component({
  selector: 'app-addition-guest',
  templateUrl: './addition-guest.component.html',
  styleUrls: ['./addition-guest.component.scss']
})
export class AdditionGuestComponent extends Pages implements OnInit {
  stepId = 3;
  editingJoiner: Joiner; 
  joiners: Joiner[] = [];
  mainJoiner = <MainJoiner>this.userSessionService.get('mainJoiner');

  constructor(
    public joinerService: JoinerService,
    public userSessionService: UserSessionService,
    public stepperService: StepperService,
    public router: Router) {
      super(userSessionService, stepperService, router);
  }

  add(name: string) {
    this.joiners.push(new Joiner(name, this.mainJoiner.id));
  }

  addNewField() {
    const newJoiner = new Joiner('', this.mainJoiner.id);
    this.editingJoiner = newJoiner;
    this.joiners.push(newJoiner);
  }

  update(newName: string, joiner: Joiner, joinerForm) {
    if(!joinerForm.form.valid) {
      return;
    }
    joiner.name = newName;
    this.editingJoiner = null;
    if(!joiner.id) {
      // New joiner need to add
      this.joinerService.addJoiner(joiner).subscribe(data => {
        joiner.id = data.id;
      })
    } else {
      this.joinerService.updateJoiner(joiner).subscribe();
    }
  }

  delete(joiner: Joiner) {
    this.joiners = this.joiners.filter(x => x != joiner);
    this.joinerService.deleteJoiner(joiner).subscribe();
  }

  cancel(joiner: Joiner) {
    if(!joiner.id) {
      const indexToRemove = this.joiners.indexOf(joiner);
      this.joiners.splice(indexToRemove, 1);
    }

    this.editingJoiner = null;
  }

  edit(joiner: Joiner) {
    this.editingJoiner = joiner;
  }

  ngOnInit() {
    this.toCurrentStep();
  }

  nextStep() {
    return;
  }
}
