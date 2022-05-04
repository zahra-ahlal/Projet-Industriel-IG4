import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    
    //this.identiteService.createIdentite(f.value).//,this.listeIngredientsFinal)
      //then(() => f.reset());
    //this.router.navigate(['/']);
   
    
  }

}
