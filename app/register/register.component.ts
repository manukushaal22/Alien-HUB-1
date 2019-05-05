import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import {Router} from '@angular/router';

//http
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit():void {
    this.timerID = setInterval(() => {
      //console.log("regist compp timeeeeer")
    }, 5000);

    $(".signup_form").hide();
    $(".signin_toggle").hide();
$("#regtoggle").click(function(){
    $(".signin_toggle").toggle(500);
    $(".signup_toggle").toggle(500);
    $(".signin_form").toggle(500);
    $(".signup_form").toggle(500);
});
$("#signtoggle").click(function(){
    $(".signup_form").toggle(500);
    $(".signin_form").toggle(500);
    $(".signin_toggle").toggle(500);
    $(".signup_toggle").toggle(500);
})

  }
  timerID;

  user1: User={
    userName:"",
    email:"",
    password:"",
    age:null
    
  };
  user2: User={
    userName:"",
    email:"",
    password:"",
    age:null
    
  };


  onSubmitreg(): void {
  
    this.http.
    post("http://localhost:3000/api/create_user",this.user1).
    subscribe(
      data  => {
      console.log("POST Request is successful ", data);
      $("#regtoggler").click(function(){
        $(".signin_toggle").toggle(500);
        $(".signup_toggle").toggle(500);
        $(".signin_form").toggle(500);
        $(".signup_form").toggle(500);
    });
      },
      error  => {

      console.log("Error", error);

      });
  }
  onSubmitin():void{
    this.http.
    post("http://localhost:3000/api/do_login",this.user2).
    subscribe(
      data  => {
      console.log("Login Request is successful ");
      //console.log(data);
      this.router.navigate(["/chat"],{queryParams: data});
      },
      error  => {

      alert("Invalid credentials");

      });
  }
  ngOnDestroy() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

}
