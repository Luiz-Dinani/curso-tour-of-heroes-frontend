import { Injectable } from '@angular/core';
import { Hero } from './hero-model';
import { Observable, of } from 'rxjs';
import { HEROES } from './heroes/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService){

  }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
  
    return heroes;
  }
}