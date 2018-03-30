import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(
    private authS:AuthService, public router:Router
  ) { }

  ngOnInit() {
  }
  addUser(){
    this.authS.registerUser(this.email,this.password)
    .then( (response) =>{
      console.log(response);
      console.log("Bien");
      this.router.navigate(['protegida']);
    }).catch( (err) => {
      console.error("Mal");
      console.error(err);
    });
  }
}
