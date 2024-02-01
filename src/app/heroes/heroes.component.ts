import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;
  
  constructor(private heroService: HeroService)
  {
   this.heroes = heroService.getHeroes();     
  }

  ngOnInit(): void {
    //this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect (hero: Hero): void{
    this.selectedHero = hero;
  }
}
