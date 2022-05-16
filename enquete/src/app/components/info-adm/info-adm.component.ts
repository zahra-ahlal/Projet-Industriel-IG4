import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EmailValidator, NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Identite } from 'src/app/models/identite.model';
import { IdentiteService } from 'src/app/services/identite.service';


import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-info-adm',
  templateUrl: './info-adm.component.html',
  styleUrls: ['./info-adm.component.css']
})
export class InfoAdmComponent implements OnInit, OnChanges {

  @Input() inputNumber: number; 
  constructor(private router : Router,private identiteService: IdentiteService,private route: ActivatedRoute,public authService: AuthService, public afAuth: AngularFireAuth) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  errorMessage : string;

  fonctions = [
    "Directeur d'unité et/ou Responsable administratif",
    "Directeur d'une équipe",
    "Directeur d'un département",
    "Directeur d'un groupe/d'un axe"
  ];

  entites = [
    "Unité complète",
    "Équipe",
    "Axe",
    "Département"
  ];


  selectedFonction!: String;
  selectedTypeEntite!: String;

  identite: Identite = {
    nom: "",
    prenom: "",
    email: "",
    fonction: "",
    numEntite: "",
    typeEntite: "",
    nomsTypeEntite: ""
  }

  user : Observable<any>;


  email :string;

  ngOnInit(): void {
    //this.selectedFonction =  "";
    this.user = this.afAuth.authState;
    console.log("USer : " + this.user)


    const url = this.router.url;
    console.log("URL : " + url)
    this.confirmSignIn(url);
    //console.log("THIS EMAIL LOGGED : " + this.email)
    

  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log(this.fonctions[1])
    console.log("SELECTED"+ this.selectedFonction)
    
    this.identiteService.createIdentite(f.value)//,this.listeIngredientsFinal)
      //then(() => f.reset());
      this.router.navigate(['/conclusion']);
  }


  async confirmSignIn(url) {
    
    try {
      if(this.afAuth.isSignInWithEmailLink(url)){
        let email = window.localStorage.getItem('emailForSignIn');
        console.log("CLOOOOOOOOOOOOOOL "+ email)
        //if missing email, prompt user for it 
        if (!email){
          email = window.prompt('Please provide your email for confirmation');
        }

      // Signin user and remove the email localStorage
      const result = await this.afAuth.signInWithEmailLink(email, url);
      window.localStorage.removeItem('emailForSignIn');
      }
    } catch (err) {
      this.errorMessage = err.message;      
    }
  }

}
