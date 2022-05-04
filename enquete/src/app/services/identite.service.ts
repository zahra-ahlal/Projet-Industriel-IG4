import { Injectable } from '@angular/core';
import { Identite } from '../models/identite.model';
import { AngularFirestore } from  '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class IdentiteService {

  constructor(private firestore: AngularFirestore) { }

  getIdentite() {
    return this.firestore.collection('identites').snapshotChanges();
  }

  createIdentite(identite: Identite){
    return this.firestore.collection('identites').add(identite); 
  }
}
