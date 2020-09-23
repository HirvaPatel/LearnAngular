import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet-lang',
  templateUrl: './greet-lang.component.html',
  styleUrls: ['./greet-lang.component.css']
})
export class GreetLangComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message: string;
  messageMap: any = {'en': 'Good Morning', 'fr': 'Bonjour', 'ge': 'Guten Morgen'};

}
