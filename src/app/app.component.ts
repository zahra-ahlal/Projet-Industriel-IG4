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

    
}