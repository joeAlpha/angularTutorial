import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero'; // Interface
import { HEROES } from './heroes/mock-heroes'; // Simulates the fetch data from server
import { Observable, of } from 'rxjs'; // For asynchronus operations
import { MessageService } from './message.service'; // Service-in-Service

// Indicates that this class can inject the service
@Injectable({
  providedIn: 'root' // Default provider
})
export class HeroServiceService {

  constructor(private messageService: MessageService) { }

  // Fetch data from the server. Obervable object is
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: all heroes was fetched');
    return of(HEROES);
  }
}
