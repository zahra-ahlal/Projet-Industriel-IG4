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
import { AccesComponent } from './modals/acces/acces.component';

import { AuthService } from "./services/auth.service";



import { OntologieComponent } from './components/ontologie/ontologie.component';
import { RecapComponent } from './components/recap/recap.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoAdmComponent,
    ConclusionComponent,
    AccesComponent,
    OntologieComponent,
    RecapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
