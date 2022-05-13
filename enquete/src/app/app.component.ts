import { Component,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


// make availbable your script import
declare global {
    var parseXml:(xmlStr:string)=>{}
}
//

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection:ChangeDetectionStrategy.OnPush
})



export class AppComponent {

    form: FormGroup;

    constructor(private ref:ChangeDetectorRef, fb: FormBuilder){
      this.form = fb.group({
        selectedSkills:  new FormArray([])
       });
    }

    title = 'xmlParser';

    stringXml = `<?xml version="1.0" encoding="UTF-8"?>
    <SYNTHESE>
      <Chimiemoléculaire>
        <Biomolécules>
          <Acidesnucléiques>
            <Amino></Amino>
          </Acidesnucléiques>
        </Biomolécules> 
        <Polymères>
          <Amino2></Amino2>
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

    addSkill(filtre: string) {
      if (filtre) {
        this.items = Array.from(this.xmlReady.querySelector(filtre).children).map((x:any,i)=>{
          return x.tagName
        })
        if(this.skills[0] == ''){
          this.skills.pop();
        }
        for(let  i = 0; i< this.items.length; i++)
          this.skills.push(this.items[i]);
      }
      //   Chimiemoléculaire
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
    }

    getChildren(el: string) : String[] {
      let children = Array.from(this.xmlReady.querySelector(el).children).map((x:any,i)=>{
          return x.tagName
      })
      return children;
    }
    //   Chimiemoléculaire
}