import { Component, OnInit } from '@angular/core';
import { MainJoiner } from 'src/app/model/main-joiner';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ageValidator } from 'src/app/shared/form-validator';
import { MainjoinerService } from 'src/app/services/backend/mainjoiner.service';
import { UserSessionService } from 'src/app/shared/user-session.service';
import { Pages } from '../pages';
import { StepperService } from 'src/app/moudules/register-dialog/services/stepper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent extends Pages implements OnInit {
  stepId = 2;
  public mainJoinerForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    dateOfBirth: ['', [Validators.required, ageValidator(MainJoiner.minAge)]],
  });

  constructor(
    public userSessionService: UserSessionService,
    public stepperService: StepperService,
    public router: Router,
    private formBuilder: FormBuilder,
    private mainJoinerService: MainjoinerService) {
      super(userSessionService, stepperService, router);
  }

  ngOnInit() {
    this.toCurrentStep();
  }

  onSubmit() {
    const newJoiner = new MainJoiner( this.mainJoinerForm.get('name').value,
                                      this.mainJoinerForm.get('email').value,
                                      new Date(this.mainJoinerForm.get('dateOfBirth').value));

    this.mainJoinerService.addMainJoiner(newJoiner)
                          .subscribe(data => {
                            newJoiner.id = data.id;
                            this.userSessionService.store('mainJoiner', newJoiner);
                            this.nextStep();
                          });
  }
}
