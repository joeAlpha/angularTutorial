import { Component, OnInit} from '@angular/core';
import {Hero} from '../heroes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // This value is received from the HeroesComponent as a
  // input property.
  hero: Hero;

  constructor( 
    private route: ActivatedRoute,
    private heroService: HeroServiceService,
    private location: Location
    ) { }

    ngOnInit(): void {
      this.getHero();
    }
      
    getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
      this.location.back();
    }

}
