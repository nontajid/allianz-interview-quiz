import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermComponent } from './pages/term/term.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { AdditionGuestComponent } from './pages/addition-guest/addition-guest.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'term', pathMatch: 'full'},
  {path: 'term', component: TermComponent },
  {path: 'personal-info', component: PersonalInfoComponent},
  {path: 'addition-guest', component: AdditionGuestComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
