import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public email:string;
  public password:string;
  constructor(
    private _authS:AuthService, private router:Router
  ) { 
  }

  ngOnInit() {
  }

  sumitLogin(){
    this._authS.loginUser( this.email, this.password).then(
      (respon)=>{

        console.log(respon);
        this.router.navigate(['protegida']);

      }
    ).catch( (error)=> {

      this.router.navigate(['login']);
      console.error('Salio mal')
    
    }); 

  }
  

}
