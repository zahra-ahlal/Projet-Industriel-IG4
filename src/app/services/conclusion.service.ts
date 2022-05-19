import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Conclusion } from '../models/conclusion.model';

@Injectable({
  providedIn: 'root'
})
export class ConclusionService {

  constructor(private firestore: AngularFirestore) { }

  getConclusion() {
    return this.firestore.collection('conclusions').snapshotChanges();
  }

  addConclusion(conclusion: Conclusion){
    return this.firestore.collection('conclusions').add(conclusion); 
  }
}
