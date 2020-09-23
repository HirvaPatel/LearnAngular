import { Component, OnInit } from '@angular/core';
import { employee } from './employee';
import { EMPLOYEES } from './employee-data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  employees: employee[];
  update: boolean=false;
  empId: number;
  empName: string;
  age: number;
  updateDet: boolean=false;

  getEmployee(){
    this.employees=EMPLOYEES;
  }

  updateDetail(){
   for(let i=0;i<this.employees.length;i++){
     if(this.employees[i].empId==this.empId){
       this.employees[i].empName=this.empName;
       this.employees[i].age=this.age;
     }
   }
  }
  ngOnInit() {
    this.getEmployee();
  }

}
