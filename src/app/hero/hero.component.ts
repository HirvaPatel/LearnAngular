import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './hero-data';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  Heros: Hero[];
  add_hero: boolean;

  getHeros(){
    this.Heros= this.heroService.getHeros();
  }

  addHero(character, name){
    this.heroService.addHero(character, name);
    this.Heros = this.heroService.getHeros();
  }

  ngOnInit(){
    this.getHeros();
  }


}
