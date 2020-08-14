import { Injectable } from '@angular/core';
import { Hero } from "./heroes/hero";
import { HEROES } from "./heroes/mock-heroes";
import { Observable, of } from 'rxjs'; // To simulate requests to server
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
