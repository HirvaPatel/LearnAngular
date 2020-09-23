import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pass: string;
  confirm: string;
  statement: string;
  confirmStatement: string;
  keyup(event: any){ 
    this.pass=event.target.value;
    if(this.pass.length<4)
    this.statement = "Password is Weak";
    else if(this.pass.length>=4 && this.pass.length<8)
    this.statement="Password is Moderate";
    else
    this.statement="Password is Strong";
  }
  keyupConfirmPass(event: any){
    this.confirm=event.target.value;
    if(this.confirm.length>1)
    {
      if(this.confirm === this.pass)
      this.confirmStatement="Passwords matched";
      else
      this.confirmStatement="Passwords don't match";
    }
  }

}
