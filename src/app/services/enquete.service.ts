import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Enquete } from '../models/enquete.model';

@Injectable({
  providedIn: 'root'
})
export class EnqueteService {

  dbPath = '/reponses'

  reponseRef : AngularFirestoreCollection<Enquete>;

  reponse:Observable<Enquete>;

  constructor(private firestore: AngularFirestore) { 
    this.reponseRef = firestore.collection(this.dbPath)
  }

  //recuperer toute les reponses
  getAllReponses (): AngularFirestoreCollection<Enquete> {
    return this.reponseRef;
  }

  //recuperer une reponse par son id
  getReponseByID(id:string){
    //@ts-ignore
    //console.log("Id dans service" + id);
    this.reponse = this.reponseRef.doc(id).valueChanges();
    return this.reponse;
  }

  addReponse(rep: Enquete){
    const newId = this.firestore.createId();
    this.firestore.collection(this.dbPath).doc(newId).set({
      nom: rep.nom,
      prenom: rep.prenom,
      email: rep.email,
      fonction: rep.fonction,
      numEntite: rep.numEntite,
      typeEntite: rep.typeEntite,
      nomsTypeEntite: rep.nomsTypeEntite,
      listeCompetences : rep.listeCompetences
    });

    return newId;
  }
  
  updateReponse(id: string, data: any): Promise<void> {
    return this.reponseRef.doc(id).update(data);
  }

}