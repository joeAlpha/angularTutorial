import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../heroes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // This value is received from the HeroesComponent as a
  // input property.
  @Input() hero: Hero;

  // route: information about the route and url for this instance
  // location: service for interact with the browser
  constructor(
    private route: ActivatedRoute, 
    private heroService: HeroService,
    private location: Location) { }

    // When the component is instantiate gets the heroes from the server
    ngOnInit(): void {
      this.getHero();
    }
    
    getHero(): void {
      // Extracts the id from the url (a dictionary structure)
      // and the + converts it into a number type.
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
      this.location.back();
    }

}
