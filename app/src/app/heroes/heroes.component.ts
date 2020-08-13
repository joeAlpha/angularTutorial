import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  // Injection of the service
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  // Responds to click event in the template
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Retrieves all heroes from the service injected
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
