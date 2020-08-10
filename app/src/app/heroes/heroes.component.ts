import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 /*  hero: Hero = {
    id: 0,
    name: 'Super Joe'
  }; */

  selectedHero: Hero;
  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

  // Responds to click event in the template
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
