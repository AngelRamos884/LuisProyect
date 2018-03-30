import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
//Firebase & Angularfire2 Modules 
import * as firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {
    
    constructor(
        public afAuth: AngularFireAuth
    ) { }
    
    registerUser(email : string, password: string){
        return new Promise((resolve, reject) =>{
            this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then( userData => resolve(userData),
        err => reject(err) );
        });
    }

    loginUser(email : string, password: string){
        return new Promise((resolve, reject) =>{
            this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then( userData => resolve(userData),
        err => reject(err) );
        });
    }
   
    getAuth(){
        return this.afAuth.authState.map( auth => auth );
    }

    logout(){
        return this.afAuth.auth.signOut();
    }

}