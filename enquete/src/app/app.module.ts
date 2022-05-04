import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule

import { AppComponent } from './app.component';
import { InfoAdmComponent } from './components/info-adm/info-adm.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { ConclusionComponent } from './components/conclusion/conclusion.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoAdmComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                               // <========== Add this line!
    //ReactiveFormsModule
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
