import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.css']
})
export class OutputDecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() OnRegister = new EventEmitter<string>();

  @Output() OnChangeColor = new EventEmitter<string>();
  courses = [
    { id: 1, name: 'Node JS' },
    { id: 2, name: 'Typescript' },
    { id: 3, name: 'Angular' },
    { id: 4, name: 'React JS' }
  ];
  register(courseName: string) {
    this.OnRegister.emit(courseName);
  }

  changeColor(event: any){
    this.OnChangeColor.emit(event.target.value);
  }

}
