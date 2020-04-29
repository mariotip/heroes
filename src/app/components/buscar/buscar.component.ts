import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes: any[] = []
  termino: string

  constructor(
    private activaterouter: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.activaterouter.params.subscribe(params => {
      console.log(params['termino']);
      this.termino = params['termino']
      this.heroes = this._heroesService.buscarHeroes(params['termino'])
    })

  }

  verHeroe(idx: Number) {
    console.log('el id del heroe verHeroe', idx)
    this.router.navigate(['/heroe', idx])
  }

}
