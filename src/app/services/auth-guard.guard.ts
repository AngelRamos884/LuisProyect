import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { AngularFireAuth } from "angularfire2/auth";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(
    public _authS : AuthService, public router : Router, public afAuth : AngularFireAuth
  ){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._authS.afAuth.authState
    .take(1)
    .map( authState => !! authState)
    .do( authenticated =>  {
        if(!authenticated){
          this.router.navigate(['login'])
        }
    });
  }
}


