import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { InfoAdmComponent } from './components/info-adm/info-adm.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';

const routes: Routes = [
  { path: 'info-administratives', component: InfoAdmComponent },
  { path: 'conclusion', component: ConclusionComponent }
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
