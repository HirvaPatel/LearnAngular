import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthdate',
  templateUrl: './birthdate.component.html',
  styleUrls: ['./birthdate.component.css']
})
export class BirthdateComponent implements OnInit {

  constructor() { }

  age: number;
  year: number;
  ngOnInit(): void {
  }
  
  calculateDOB(){
    this.year=2020-this.age;
  }
}
