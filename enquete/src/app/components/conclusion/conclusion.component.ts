import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConclusionService } from 'src/app/services/conclusion.service';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent implements OnInit {

  constructor(private router : Router,private conclusionService: ConclusionService,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    
    this.conclusionService.addConclusion(f.value)//,this.listeIngredientsFinal)
      //then(() => f.reset());
    this.router.navigate(['/']);
   
    
  }

}
