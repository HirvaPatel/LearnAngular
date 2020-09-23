import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infyProject';

  color= "red";
  fontSize= "20px";
  courses: any[]= [
    { id: 1, name: "Angular" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "Node Js" },
    { id: 4, name: "Npm"}
  ];


  okCancel: boolean = false;

  tableName: string = "product details";
  productCode="PROD001";
  productName="laptop";
  

  show: boolean;
  
}
   