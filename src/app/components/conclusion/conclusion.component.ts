import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConclusionService } from 'src/app/services/conclusion.service';
import {Location} from '@angular/common';
import { EnqueteService } from 'src/app/services/enquete.service';
import { Enquete } from 'src/app/models/enquete.model';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {

  conclusion: string;
  idReponse : string = "";

  rep : Enquete = {
    id: "",
    nom: "coucou",
    prenom: "",
    email: "",
    fonction: "",
    numEntite: "",
    typeEntite: "",
    nomsTypeEntite: "",
    listeCompetences : ["a","e"],
    conclusion: ""
  };

  constructor(private router : Router,private enqueteService: EnqueteService,private conclusionService: ConclusionService,private route: ActivatedRoute, private _location: Location) { }

  ngOnInit(): void {
    this.idReponse = this.route.snapshot.params['idReponse'];
    this.getReponse();

  }

  getReponse() : void {
    this.enqueteService.getReponseByID(this.idReponse).subscribe(data => {
      this.rep.nom = data.nom;
      this.rep.prenom = data.prenom;
      this.rep.email = data.email;
      this.rep.fonction = data.fonction;
      this.rep.numEntite = data.numEntite;
      this.rep.nomsTypeEntite = data.nomsTypeEntite;
      this.rep.typeEntite = data.typeEntite;
      this.rep.listeCompetences = data.listeCompetences;
      console.log("Pre recuperer " + data.fonction)
    })
  }

  onSubmit(f: NgForm) {
    this.conclusion = f.value["Conclusion"]
    this.router.navigate(['recapitulatif']);  
    console.log(f.value["Conclusion"])
    this.rep.conclusion = f.value["Conclusion"];
    this.enqueteService.updateReponse(this.idReponse, this.rep);
  }

  backClicked() {
    this._location.back();
  }

}
