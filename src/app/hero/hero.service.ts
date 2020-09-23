import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './hero-data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { 
  }

  getHeros() {
    return HEROS;
  }

  addHero(character: string, name: string){
    var newHero: Hero={
      'character': character, 'name': name
    }
    
    HEROS.push(newHero);
  }
}
