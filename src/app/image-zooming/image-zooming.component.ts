import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-zooming',
  templateUrl: './image-zooming.component.html',
  styleUrls: ['./image-zooming.component.css']
})
export class ImageZoomingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images: any[]=[
    {id:1, src: "../assets/Bouquet1.jpg"},
    {id:2, src: "../assets/Bouquet2.jpg"},
    {id:3, src: "../assets/Bouquet3.jpg"}
  ]

  mouseenter: boolean= false;
  hoveredImg: string;
  mouseEnter(event: any){
    this.hoveredImg=event.target.src;
    
    this.mouseenter=true;
  }
  mouseLeave(event: any){
    this.mouseenter=false;
  }
}
