import { Component, OnInit } from '@angular/core';
//http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
  }

  user: User={
    userName:"",
    email:"",
    password:"",
    age:null
  };

  public lgt():void{
    this.router.navigate(["/login"]);
}
}
