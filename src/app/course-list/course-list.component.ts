import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

courses=[
  {id: 1, name: "Angular"},
  {id: 2, name: "TypeScript"},
  {id: 3, name: "Node JS"},
  {id: 4, name: "React JS"}
]



}
