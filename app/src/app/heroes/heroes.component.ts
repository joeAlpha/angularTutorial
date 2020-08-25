import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroServiceService } from '../hero-service.service'; // Imports the dependency
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // selectedHero: Hero;
  heroes: Hero[]; // This data will be fetched from the service injected

  // Injections occurs in the constructor
  constructor(
    private heroService: HeroServiceService,
    private messageService: MessageService) { }

  // Lifecycle hook (after construction of the component)
  ngOnInit(): void {
    this.getHeroes();
  }

  // Responds to click event in the template
/*   onSelect(hero: Hero): void {
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHero = hero;
  } */

  // Retrieves all heroes from the service injected
  getHeroes(): void {
    this.heroService.getHeroes()
        // Subscribe method is critical, 'cause lets the asynchronus operation happen
        .subscribe(heroes => this.heroes = heroes);
  }
}
