import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // This value is received from the HeroesComponent as a
  // input property.
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
