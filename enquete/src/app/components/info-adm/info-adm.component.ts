import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-info-adm',
  templateUrl: './info-adm.component.html',
  styleUrls: ['./info-adm.component.css']
})
export class InfoAdmComponent implements OnInit {

  constructor() { }

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


  ngOnInit(): void {
    //this.selectedFonction =  "";
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    console.log(this.fonctions[1])
    console.log("SELECTED"+ this.selectedFonction)
  }

}
