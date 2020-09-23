import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  regMsg: string;
  courseReg(course: string){
    this.regMsg=`Your registration for ${course} is successful`;
  }

  txtColor: string;
  
  changedColor: string = 'black';
}
