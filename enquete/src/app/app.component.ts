import { Component,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';


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

    constructor(private ref:ChangeDetectorRef){}

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
    parseXml(){
        console.log(this.xmlReady.querySelector("Chimiemoléculaire"));

        //renvoie le nom de les enfants de la racine / balise renseignée
        /*this.items = Array.from(this.xmlReady.querySelector("Chimiemoléculaire").children).map((x:any,i)=>{
            return x.tagName
        })*/
        console.log("FIN " + this.rechercheRec(this.items,"SYNTHESE"))
        //this.rechercheRec(this.items,"Chimiemoléculaire");
        
        /*let i = 0;

        for(i = 0; i<this.items.length;i++){

          console.log("1er Niveau \n" + this.items[i]);

          let niv2 = this.items[i];   

          let j = 0

          niv2 = Array.from(this.xmlReady.querySelector(niv2).children).map((x:any,i)=>{
            return x.tagName
          })

          for(j = 0; j<niv2.length;j++){

            console.log("2° Niv \n" + niv2[j])

            let niv3 = Array.from(this.xmlReady.querySelector(niv2[j]).children).map((x:any,i)=>{
              return x.tagName
            })

            console.log(this.feuille(niv3))                       

          }
        }*/

        this.ref.detectChanges()
    }

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
    //
}