import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-currency',
  templateUrl: './change-currency.component.html',
  styleUrls: ['./change-currency.component.css']
})
export class ChangeCurrencyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ProductPrice = 217021;
  countryCurr = 'INR';
  changeCurr(event: any){
    this.countryCurr = event.target.value;
  }
}
