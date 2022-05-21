import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { InfoAdmComponent } from './components/info-adm/info-adm.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';
import { AccesComponent } from './modals/acces/acces.component';

import { AuthGuard } from './shared/guard/auth.guard';
import { OntologieComponent } from './components/ontologie/ontologie.component';


const routes: Routes = [
  { path: 'info-administratives', component: InfoAdmComponent}, //canActivate: [AuthGuard] 
  { path: 'conclusion', component: ConclusionComponent },
  { path: 'acces', component: AccesComponent },
  {path: 'ontologie', component: OntologieComponent},
  {path: '**', component: InfoAdmComponent}
]; // sets up routes constant where you define your routes

@NgModule({
  //declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
