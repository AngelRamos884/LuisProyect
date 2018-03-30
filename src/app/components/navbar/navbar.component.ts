import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  public isLogin: boolean;
  public email:string;
  public nombre:string;

  constructor(
    public _authS: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this._authS.getAuth().subscribe( auth =>{
      if( auth ){
        this.isLogin = true;
        this.nombre = auth.displayName;
        this.email = auth.email;
      }else{
        this.isLogin = false;
      }
    });
  }

  logout(){
    this._authS.logout();
    this.router.navigate(['login']);
  }

}
