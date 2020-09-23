import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paint-text',
  templateUrl: './paint-text.component.html',
  styleUrls: ['./paint-text.component.css']
})
export class PaintTextComponent implements OnInit {

  constructor() { }

  TextColor: string;
  ngOnInit(): void {
  }

}
