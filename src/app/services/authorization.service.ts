import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private loginServerUrl : string = `http://143.110.240.110:9090/metaData/user/login`
  public signInForm : FormGroup = this.formBuilder.group({
    email : [""],
    password : [""]
  })
  
  constructor( private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  signIn(user:any){
    return this.http.post<any>(this.loginServerUrl, user)
   }
}
