import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  constructor(private _heroesService: HeroesService,
    private router:Router) {
  }

  heroes: Heroe[] = []

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes()
    console.log(this.heroes);


  }
  verHeroe(idx: Number) {
    console.log('el id del heroe verHeroe',idx)
    this.router.navigate(['/heroe', idx])
  }

}
