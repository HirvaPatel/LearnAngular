import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  productRatings: number[] = [4, 3, 2, 4, 1];
  productMapping: { [k: string]: string } =
  { '=4': ' # - Excellent', '=3': ' # - Good', '=2': '# - Average', 'other': ' # - Very Bad' };

}
