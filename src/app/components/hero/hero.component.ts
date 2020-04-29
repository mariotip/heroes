import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  heroe: any = {}

  constructor(private activaterouter: ActivatedRoute,
    private _heroesService: HeroesService) {

    this.activaterouter.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id'])
    })
  }

  ngOnInit(): void {
  }

}
