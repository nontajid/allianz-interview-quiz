import { Component, OnInit } from '@angular/core';
import { Pages } from '../pages';
import { UserSessionService } from 'src/app/shared/user-session.service';
import { StepperService } from 'src/app/component-service/stepper.service';
import { Router } from '@angular/router';
import { MainJoiner } from 'src/app/model/main-joiner';
import { Joiner } from 'src/app/model/joiner';
import { JoinerService } from 'src/app/backend/joiner.service';
import { NgForm } from '@angular/forms';
import { MainjoinerService } from 'src/app/backend/mainjoiner.service';

@Component({
  selector: 'app-addition-guest',
  templateUrl: './addition-guest.component.html',
  styleUrls: ['./addition-guest.component.scss']
})
export class AdditionGuestComponent extends Pages implements OnInit {
  stepId = 3;
  mainJoinerEditMode = false;
  editingJoiner: Joiner; 
  joiners: Joiner[] = [];
  mainJoiner = <MainJoiner>this.userSessionService.get('mainJoiner');

  constructor(
    public joinerService: JoinerService,
    public mainJoinerService: MainjoinerService,
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

  onMainJoinerSubmit(mainJoinerForm: NgForm) {
    if (!mainJoinerForm.form.valid) return;
    this.mainJoinerService.updateMainJoiner(this.mainJoiner)
                          .subscribe( data => {                            
                            this.mainJoinerEditMode = false;
                            this.mainJoiner.name = mainJoinerForm.controls['name'].value;
                          });
    
  }

  onSubmit(joinerForm: NgForm, joiner: Joiner) {
    if (!joinerForm.form.valid) return;
    this.editingJoiner = null;
    
    Object.keys(joinerForm.controls).forEach( key => {      
      if(joiner.hasOwnProperty(key)) {
        joiner[key] = joinerForm.controls[key].value;
      }
    });

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

  cancel(joiner: Joiner, joinerForm: NgForm) {
    if(!joiner.id) {
      const indexToRemove = this.joiners.indexOf(joiner);
      this.joiners.splice(indexToRemove, 1);
    } else {
      joinerForm.controls['name'].setValue(joiner.name);
    }

    this.editingJoiner = null;
  }

  edit(joiner: Joiner) {
    // Remove none save joiner
    this.joiners.forEach(checkJoiner => {
      if(!checkJoiner.id) {
        const indexToRemove = this.joiners.indexOf(checkJoiner);
        this.joiners.splice(indexToRemove, 1);  
      }
    });

    this.editingJoiner = joiner;
  }

  ngOnInit() {
    this.toCurrentStep();
  }

  nextStep() {
    return;
  }
}
