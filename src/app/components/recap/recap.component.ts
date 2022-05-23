import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enquete } from 'src/app/models/enquete.model';
import { EnqueteService } from 'src/app/services/enquete.service';
import * as XLSX from 'xlsx'; 


@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

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
  constructor(private router : Router,private enqueteService: EnqueteService, private route: ActivatedRoute) { }

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
      this.rep.conclusion = data.conclusion;

      console.log("Pre recuperer " + data.fonction)
    })
  }

	
    /*name of the excel-file which will be downloaded. */ 
    fileName= 'Reponses.xlsx';  

    exportexcel(): void 
        {
          /* table id is passed over here */   
          let element = document.getElementById('excel-table'); 
          const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

          /* generate workbook and add the worksheet */
          const wb: XLSX.WorkBook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

          /* save to file */
          XLSX.writeFile(wb, this.fileName);
          
        }
    }