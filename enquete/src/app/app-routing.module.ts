import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { InfoAdmComponent } from './components/info-adm/info-adm.component';

const routes: Routes = [
  { path: 'info-administratives', component: InfoAdmComponent }
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
