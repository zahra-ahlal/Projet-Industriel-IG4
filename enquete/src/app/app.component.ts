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

    constructor(
        private ref:ChangeDetectorRef
    ){

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
        <Polymères></Polymères>
      </Chimiemoléculaire>
    </SYNTHESE>
    `
    items:Array<any> = []

    // practical application
    parseXml:Function = ()=>{
        let xmlReady:any;
        xmlReady = parseXml(this.stringXml) // lis le contenu sous format xml

        //renvoie le nom de les enfants de la racine / balise renseignée
        this.items = Array.from(xmlReady.querySelector("Chimiemoléculaire").children).map((x:any,i)=>{
            return x.tagName
        })
        
        let enfant = this.items[0]
        this.items[0] = Array.from(xmlReady.querySelector("Biomolécules").children).map((x:any,i)=>{
          return x.tagName
        })
        
        console.log(enfant)

        this.ref.detectChanges()
    }
    //
}