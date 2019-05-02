// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Component
import { AppComponent } from './app.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { TermComponent } from './pages/term/term.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AdditionGuestComponent } from './pages/addition-guest/addition-guest.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterDialogModule } from './moudules/register-dialog/register-dialog.module';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    DialogComponent,
    TermComponent,
    PersonalInfoComponent,
    AdditionGuestComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RegisterDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
