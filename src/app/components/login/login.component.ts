import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  logoPath = "assets/Logos/onnet+logo_2.png"
  loginUserData = {
    osId : "",
    password : ""
  }
  constructor(private authorization : AuthorizationService) { }

  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.loginUserData)
    this.authorization.signIn(this.loginUserData)
    .subscribe(
      res =>{console.log(res)},
      err =>{console.log(err)}
    )
  }
}
