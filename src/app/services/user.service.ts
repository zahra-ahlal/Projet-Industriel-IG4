import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { 
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, query, where
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  dbPath = '/users'
  usersRef : AngularFirestoreCollection<User>;
  user:Observable<User>;
  //constructor(private http: HttpClient) { }

  constructor(private firestore: Firestore, private db: AngularFirestore) {
    this.usersRef = db.collection(this.dbPath)
  }

  getAllUsers (): AngularFirestoreCollection<User> {
    return this.usersRef;
  }

  getUserByName(user : String): AngularFirestoreCollection<User>{
    return this.db.collection(this.dbPath,ref => ref.where('nom','==', user ));
  }
}
