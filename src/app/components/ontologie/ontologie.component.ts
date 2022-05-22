import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Enquete } from 'src/app/models/enquete.model';
import { EnqueteService } from 'src/app/services/enquete.service';
import {Location} from '@angular/common';



@Component({
  selector: 'app-ontologie',
  templateUrl: './ontologie.component.html',
  styleUrls: ['./ontologie.component.css']
})


export class OntologieComponent {

  form: FormGroup;

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
    listeCompetences : ["a","e"]
  };

  constructor(private router : Router, private enqueteService: EnqueteService,private ref:ChangeDetectorRef, fb: FormBuilder, private route : ActivatedRoute, private _location: Location){
    this.form = fb.group({
      selectedSkills:  new FormArray([])
     });
    
  }

  ngOnInit(): void {
    this.idReponse = this.route.snapshot.params['email'];
    console.log("mail recupéré  "+ this.idReponse);

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
      console.log("Pre recuperer " + data.fonction)
    })
  }

  backClicked() {
    this._location.back();
  }

  keyword = 'name';

  selectedDomain = ""
  
  domaines = ["SYNTHESE","E-Santé" ,
  "Physique","Chimie","Technologies Chimiques",
  "Interactions organismes​","Observation Environnement​"]

  stringXml = `<?xml version="1.0" encoding="UTF-8"?>
  <SYNTHESE>
    <Chimiemoléculaire>
      <Biomolécules>
        <Acidesnucléiques>
          <Amino></Amino>
        </Acidesnucléiques>
      </Biomolécules> 
      <Polymères>
      </Polymères>
    </Chimiemoléculaire>
  </SYNTHESE>`

  items:Array<any> = []
  xmlReady:any = parseXml(this.stringXml)

  parsedFile : Array<any> = this.items = Array.from(this.xmlReady.querySelector("SYNTHESE").children).map((x:any,i)=>{
    return x.tagName
  })

  // practical application
  /*parseXml(){
      console.log(this.xmlReady.querySelector("Chimiemoléculaire"));
      console.log("FIN " + this.rechercheRec(this.items,"SYNTHESE"))
  
      this.ref.detectChanges()
  }*/

  rechercheRec(tab:any, filtre : String){

    //CAS DE BASE
    if(this.feuille(tab)){
      return ""
    }else{
      //Au debut le filtre doit etre egale à la racine du coup ; this.xmlReady.querySelector(this.parsedFile[0]).children
      tab = Array.from(this.xmlReady.querySelector(filtre).children).map((x:any,i)=>{
        return x.tagName
      })

      let s=""
      for(let i = 0; i<tab.length;i++){
        s+=tab[i] + " - "
        s+=this.rechercheRec(tab,tab[i])
      }
      //console.log("enfant :" + tab + " : "+s);
      return s
    }

  }

  feuille(element:any){
    if(element.length<1)
      return true
    else 
      return false
  }
  

  skills = [''];

  liste = this.rechercheRec(this.items,"SYNTHESE")

  addSkill(filtre: string) {
    //test casse saisie
    //console.log(this.stringXml);
  
    let liste = this.stringXml
    let s=filtre
    //console.log(liste.toLowerCase())
    //console.log(liste.toLowerCase().includes(s.toLowerCase()));
    let chaine = filtre
    
    if (filtre && this.stringXml.includes(filtre) && !this.skills.includes(filtre)) {
      /*this.items = Array.from(this.xmlReady.querySelector(filtre).children).map((x:any,i)=>{
        return x.tagName
      })*/
      if(this.skills[0] == ''){
        this.skills.pop();
      }
      this.skills.push(filtre);
      /*for(let  i = 0; i< this.items.length; i++)
        this.skills.push(this.items[i]);*/
    }
  }

  onCheckboxChange(event: any) {

    const selectedSkills = (this.form.controls['selectedSkills'] as FormArray);
    
    if (event.target.checked) {
      selectedSkills.push(new FormControl(event.target.value));
    } else {
      const index = selectedSkills.controls
      .findIndex(x => x.value === event.target.value);
      selectedSkills.removeAt(index);
    }
  }

  submit() {
    console.log(this.form.value['selectedSkills']);
    this.rep.listeCompetences = this.form.value["selectedSkills"];
    this.enqueteService.updateReponse(this.idReponse, this.rep);
    this.router.navigate(['/conclusion/' + this.idReponse]);
  }

  getChildren(el: string) : String[] {
    let children = Array.from(this.xmlReady.querySelector(el).children).map((x:any,i)=>{
        return x.tagName
    })
    return children;
  }
  //   Chimiemoléculaire

}