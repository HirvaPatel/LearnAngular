import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isBordered: boolean = true;
  isAuthenticated: boolean;
  submitted: boolean = false;
  userName: string;


  onSubmit(userName: string, password: string){
    this.submitted = true;
    this.userName=userName;
    if (userName === "admin" && password === "admin"){
      this.isAuthenticated = true;
    }
    else{
      this.isAuthenticated = false;
    }
  }

  submitFalse(){
    this.submitted=false;
  }

}
