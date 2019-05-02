import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterDialogRoutingModule } from './register-dialog-routing.module';
import { RegisterDialogComponent } from './register-dialog.component';

import { AdditionGuestComponent } from './pages/addition-guest/addition-guest.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { TermComponent } from './pages/term/term.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from 'src/app/components/stepper/stepper.component';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { StepperService } from './services/stepper.service';

@NgModule({
  providers: [
    StepperService
  ],
  declarations: [
    StepperComponent,
    DialogComponent,
    RegisterDialogComponent,
    AdditionGuestComponent,
    PersonalInfoComponent,
    TermComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RegisterDialogRoutingModule
  ]
})
export class RegisterDialogModule { }
