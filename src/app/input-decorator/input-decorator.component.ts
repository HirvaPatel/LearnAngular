import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.css']
})
export class InputDecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses=[
    {id: 1, name: "Angular"},
    {id: 2, name: "TypeScript"},
    {id: 3, name: "Node JS"},
    {id: 4, name: "React JS"}
  ]
  
  course: any[];
  
   @Input() set cName(name: string) {
    this.course = [];
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].name === name) {
        this.course.push(this.courses[i]);
      }
    }
   }

   movies: string[];

   @Input() set Category(genre: string){
    if(genre==="action"){
      this.movies=["Hardy Boys","Avengers","Extraction"];
    }
    else if(genre==="romance"){
      this.movies=["Fault in our Stars","The Proposal","Me before you"];
    }
    else if(genre==="mystry"){
      this.movies=["Murder mystry","Gone girl","The Prestige"];
    }
    else{
      this.movies=[];
    }
   }
  
}
