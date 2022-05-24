import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enquete } from 'src/app/models/enquete.model';
import { EnqueteService } from 'src/app/services/enquete.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-telechargement',
  templateUrl: './telechargement.component.html',
  styleUrls: ['./telechargement.component.css']
})
export class TelechargementComponent implements OnInit {

  reponses : Array<Enquete>;

  constructor(private router : Router,private enqueteService: EnqueteService, private route: ActivatedRoute) { }

  

  ngOnInit(): void {
    this.getReponse()
  }

  getReponse() : void {
    this.enqueteService.getAllReponses().subscribe(data => {
      console.log("nombre reponses: " + data[0].email)
      this.reponses = data
      console.log("nombre reponses 2: " + this.reponses[0].nom)
      /*for(let i=0;i<data.length;i++){
        this.reponses[0] = data[0].email/*{
          /*nom: data[i].nom,
          prenom: data[i].prenom,
          email: data[i].email,
          fonction: data[i].fonction,
          numEntite: data[i].numEntite,
          typeEntite: data[i].typeEntite,
          nomsTypeEntite: data[i].nomsTypeEntite,
          listeCompetences : data[i].listeCompetences,
          conclusion: data[i].conclusion
        }
      }*/
      console.log("REP: " + this.reponses.length)
    })
    console.log("REP: " + this.reponses.length)
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
  

	
   