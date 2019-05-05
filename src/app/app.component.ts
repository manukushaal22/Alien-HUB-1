import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alien Hub';
  
  constructor (private http:HttpClient ,private router:Router){}
  
  public lgt():void{
      this.router.navigate(["/register"]);
  }
}
