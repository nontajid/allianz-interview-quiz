import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxCheckboxModule, 
         NxButtonModule,
         NxCopytextModule,
         NxMessageModule } from '@allianz/ngx-ndbx';

import { NxIconModule } from '@allianz/ngx-ndbx/icon';
import { NxInputModule } from '@allianz/ngx-ndbx/input';
import { NxNativeDateModule } from '@allianz/ngx-ndbx/datefield';
import { NxDatefieldModule } from '@allianz/ngx-ndbx/datefield';
import { NxFormfieldModule } from '@allianz/ngx-ndbx/formfield';

import { RegisterDialogRoutingModule } from './register-dialog-routing.module';
import { RegisterDialogComponent } from './register-dialog.component';

import { AdditionGuestComponent } from './pages/addition-guest/addition-guest.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { TermComponent } from './pages/term/term.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from 'src/app/components/stepper/stepper.component';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { NxProgressStepperModule } from '@allianz/ngx-ndbx/progress-stepper';

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
    RegisterDialogRoutingModule,
    NxCheckboxModule,
    NxButtonModule,
    NxCopytextModule,
    NxDatefieldModule,
    NxNativeDateModule,
    NxInputModule,
    NxFormfieldModule,
    NxMessageModule,
    NxIconModule,
    NxProgressStepperModule
  ]
})
export class RegisterDialogModule { }
