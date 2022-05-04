import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm, NgModel } from '@angular/forms';

import { Identite } from 'src/app/models/identite.model';
import { IdentiteService } from 'src/app/services/identite.service';

@Component({
  selector: 'app-info-adm',
  templateUrl: './info-adm.component.html',
  styleUrls: ['./info-adm.component.css']
})
export class InfoAdmComponent implements OnInit {
  router: any;

  constructor(private identiteService: IdentiteService) { }

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


  ngOnInit(): void {
    //this.selectedFonction =  "";
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log(this.fonctions[1])
    console.log("SELECTED"+ this.selectedFonction)
    
    this.identiteService.createIdentite(f.value).//,this.listeIngredientsFinal)
      then(() => f.reset());
    //this.router.navigate(['/']);
   
    
  }

}
