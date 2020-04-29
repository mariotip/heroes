import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscarComponent } from './components/buscar/buscar.component';

//por typescrip ya esta con constante debe ser tipo Route
const routes: Routes = [
  // reglas de routeo
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroComponent},
  { path: 'buscar/:termino', component: BuscarComponent},
  { path: '*', component: HomeComponent},//esta linea siempre debe estar abajo por que si no por default lo toma al principio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
